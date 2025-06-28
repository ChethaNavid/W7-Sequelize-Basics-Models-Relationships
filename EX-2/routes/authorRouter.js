import express from 'express';
import { getAuthorWithBook } from '../controllers/authorController.js';

const authorRouter = express.Router();

authorRouter.get("/author/book", getAuthorWithBook);

export default authorRouter;