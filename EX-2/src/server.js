import sequelize from "./db/database.js";

try {
    await sequelize.authenticate();
    console.log("Successfully connected to the database");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}