import sequelize from "../src/db/database.js"
import { DataTypes } from 'sequelize';

export const Class = sequelize.define('Class', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    room: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

