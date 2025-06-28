import sequelize from "../src/db/database.js"
import { DataTypes } from 'sequelize';

const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    birthYear: DataTypes.INTEGER
})

export default Author;
