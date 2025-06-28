import sequelize from "../src/db/database.js"
import { DataTypes } from 'sequelize';

export const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
