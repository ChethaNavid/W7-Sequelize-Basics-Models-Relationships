import { Book, Author } from "../models/index.js"

// GET/api/author/book
const getAuthorWithBook = async (req, res) => {
    try {
        const author = await Author.findAll({
            include: [{
                model: Book,
                attributes: [ 'id', 'title', 'publicationYear', 'pages' ],
            }]
        })

        return res.status(200).json({ error: false, author, message: "Successfully fetch authors including books" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: "Interanl Server Error" });
    }
}

export {getAuthorWithBook};