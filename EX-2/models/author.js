import sequelize from "../src/db/database.js"
import { DataTypes } from 'sequelize';

const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    birthYear: DataTypes.INTEGER
})

await Author.create({
    name: "Ronan The Best", 
    birthYear: 1990
})

await Author.create({
    name: "Kim Ang", 
    birthYear: 1995
})

await Author.create({
    name: "Hok Tim", 
    birthYear: 2015
})

export default Author;
