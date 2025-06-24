import sequelize from "../src/db/database.js";
import { DataTypes } from 'sequelize';

const book = sequelize.defineI("Book", {
    title: DataTypes.STRING,
    publicationYear: DataTypes.INTEGER,
    pages: DataTypes.INTEGER
})

await book.create({
    title: "I'm the only one",
    publicationYear: 2015,
    pages: 502
})

await book.create({
    title: "Dream Night",
    publicationYear: 2022,
    pages: 321
})

await book.create({
    title: "Significant Journey",
    publicationYear: 2010,
    pages: 333
})

await book.create({
    title: "Love in the dark",
    publicationYear: 2021,
    pages: 502
})

