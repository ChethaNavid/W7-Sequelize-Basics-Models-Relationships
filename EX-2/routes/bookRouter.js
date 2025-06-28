import express from 'express';
import { createBook, getAllBooks } from '../controllers/bookController.js';

const bookRouter = express.Router();

bookRouter.get("/book/:authorId", getAllBooks);
bookRouter.post("/create-book/:authorId", createBook);

export default bookRouter;