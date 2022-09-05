const Sequelize = require("sequelize");

const db = new Sequelize("postgres://scotyiabain@localhost:5432/nore", {});

const Business = require("./business")(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected successfully");
        db.sync(); //{ force: true }
    } catch (error) {
        console.error(error);
        console.error("PANIC! DB PROBLEMS!");
    }
};

connectToDB();

module.exports = { db, Business };
