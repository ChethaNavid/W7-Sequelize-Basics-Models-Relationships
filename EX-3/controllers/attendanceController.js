import { Attendance, Student, Class, sequelize } from "../models/index.js";

// GET/attendance?studentId=1&date=2025-06-17
const getAttendanceByDate = async (req, res) => {
    const { studentId, date } = req.query;

    if(!studentId || !date) {
        return res.status(400).json({ error: true, message: "Missing studentId or date in query" });
    }

    try{
        const record = await Attendance.findOne({ where: { studentId, date }});

        if(!record) {
            return res.status(404).json({ error: true, message: "No attendance record found of this student on the given date."})
        }

        return res.status(200).json({ error: false, record });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

// POST/attendance?studentId=1&date=2025-06-17
const markAttendanceByDate = async (req, res) => {
    const { studentId, date } = req.query;
    const { status } = req.body;

    if(!studentId || !date) {
        return res.status(400).json({ error: true, message: "Missing studentId or date in query" });
    }

    if(!status) {
        return res.status(400).json({ error: true, message: "Status is required." });
    }

    try{
        const student = await Student.findByPk(studentId);
        if(!student) {
            return res.status(404).json({ error: true, message: "Student Not Found."})
        }
        const [record, created] = await Attendance.findOrCreate({ where: { studentId, date }, defaults: {status}});

        if(!created) {
            record.status = status;
            await record.save();
        }

        return res.status(200).json({ error: false, record, message: created ? "Attendance marked." : "Attendance updated."});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

// GET/classes/:id/attendance
const getAttendanceInClass = async (req, res) => {
    const { classId } = req.params;

    try {
        const student = await Student.findAll({
            where: { classId },
            include: {
                model: Attendance,
                attributes: ['date', 'status']
            }
        })

        return res.status(200).json({ error: false, student})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

// GET/students/:id/attendance
const getAttendanceForStudent = async (req, res) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findByPk(studentId, {
            attributes: ['id', 'name']
        });

        if (!student) {
            return res.status(404).json({
                error: true,
                message: 'Student not found.'
            });
        }

        const summary = await Attendance.findAll({
            where: { studentId },
            attributes: [
                'status',
                [sequelize.fn('COUNT', sequelize.col('status')), 'count']
            ],
            group: ['status']
        });

        return res.status(200).json({ 
            error: false, 
            student: {
                id: student.id,
                name: student.name
            },
            summary
        });
    } catch(error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Interanl Server Error" });
    }
}

export { getAttendanceInClass, markAttendanceByDate, getAttendanceByDate, getAttendanceForStudent};