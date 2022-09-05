const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
server.use(cors());
server.use(bodyParser.json());

const { Business } = require("./db.js");

// if heroku, process.env.PORT will be provided
let port = process.env.PORT;
if (!port) {
    port = 3001;
}

const { db } = require("./db.js");

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.get("/businesses", async (req, res) => {
    res.send({ businesses: await Business.findAll() });
});

server.listen(port, () => {
    console.log("Server running.");
});
