import express from 'express'
import { getAttendanceByDate, markAttendanceByDate, getAttendanceInClass, getAttendanceForStudent } from '../controllers/attendanceController.js'

const router = express.Router();

router.get('/attendance', getAttendanceByDate);
router.post('/attendance', markAttendanceByDate);
router.get('/classes/:classId/attendance', getAttendanceInClass);
router.get('/students/:studentId/attendance', getAttendanceForStudent);

export default router;
