import sequelize from "./db/database.js";
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv'
import seedData from "../seeders/seedAuthorBook.js";
import authorRouter from "../routes/authorRouter.js";
import bookRouter from "../routes/bookRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

try {
    await sequelize.authenticate();
    // await seedData();  //Run this line once only! After running it once, comment it back
} catch (error) {
    console.log("Unable to connect to database");
}
app.use('/api', authorRouter);
app.use('/api', bookRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})