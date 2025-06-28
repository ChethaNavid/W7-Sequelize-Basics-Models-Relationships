import sequelize from "../src/db/database.js";
import { Author, Book } from "../models/index.js";

const seedData = async () => {
    try {
        await sequelize.sync({ force: true });
        const authors = await Author.bulkCreate([
            {name: "Ronan The Best", birthYear: 1990},
            {name: "Kim Ang", birthYear: 1995},
            {name: "Hok Tim", birthYear: 2015}
        ])
    
        await Book.bulkCreate([
            { title: "I'm the only one", publicationYear: 2015, pages: 502, authorId: authors[0].id },
            { title: "Dream Night", publicationYear: 2022, pages: 321, authorId: authors[0].id },
            { title: "Significant Journey", publicationYear: 2010, pages: 333, authorId: authors[1].id },
            { title: "Love in the dark", publicationYear: 2021, pages: 502, authorId: authors[1].id },
            { title: 'Baby Genius', publicationYear: 2023, pages: 100, authorId: authors[2].id },
            { title: 'Playground Tactics', publicationYear: 2024, pages: 150, authorId: authors[2].id },
        ])
        
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export default seedData;