import {sequelize} from '../models/index.js'
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv'
import router from '../routes/attendanceRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

try {
    await sequelize.authenticate();
    await sequelize.sync();
} catch (error) {
    console.log("Unable to connect to database");
}

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})