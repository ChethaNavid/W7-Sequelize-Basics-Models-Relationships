import { Class } from "./class.js";
import { Student } from "./student.js";
import { Attendance } from "./attendanceRecord.js";
import sequelize from "../src/db/database.js";

Class.hasMany(Student, { foreignKey: 'classId' });
Student.belongsTo(Class, { foreignKey: 'classId' });

Student.hasMany(Attendance, { foreignKey: 'studentId' });
Attendance.belongsTo(Student, { foreignKey: 'studentId' });

export {sequelize, Class, Student, Attendance};
