const express = require("express");
const server = express();

// if heroku, process.env.PORT will be provided
let port = process.env.PORT;
if (!port) {
    port = 3001;
}

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.listen(port, () => {
    console.log("Server running.");
});
