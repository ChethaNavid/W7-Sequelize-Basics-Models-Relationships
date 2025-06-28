import sequelize from "../src/db/database.js"
import { DataTypes } from 'sequelize';

export const Attendance = sequelize.define('Attendance', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("present", "absent", "late"),
        allowNull: false
    }
})