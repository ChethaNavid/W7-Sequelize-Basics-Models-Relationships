import { Book, Author } from "../models/index.js"
// GET/api/book/:authorId
const getAllBooks = async (req, res) => {
    const {authorId} = req.params;
    try {
        const books = await Book.findAll({ where: {authorId} });
        return res.status(200).json({ 
            error: false, 
            books,
            message: "Books fetch successfully." 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error." });
    }
}

// POST/api/create-book/:authorId
const createBook = async (req, res) => {
    const { title, publicationYear, pages } = req.body;
    const { authorId } = req.params;
    try {
        const author = await Author.findByPk(authorId);
        if (!author) {
            return res.status(404).json({ error: true, message: "Author not found." });
        }

        const book = await author.createBook({
            title,
            publicationYear,
            pages
        });

        return res.status(201).json({ error: false, book, message: "Book created successfully." });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Internal Server Error." });
    }
}

export {getAllBooks, createBook};
