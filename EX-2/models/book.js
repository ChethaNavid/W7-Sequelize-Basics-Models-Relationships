import sequelize from "../src/db/database.js";
import { DataTypes } from 'sequelize';

const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    publicationYear: DataTypes.INTEGER,
    pages: DataTypes.INTEGER
})

export default Book;