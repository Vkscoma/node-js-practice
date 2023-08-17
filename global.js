const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Express is working!");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

const people = require("./people");

app.get("/people", function (request, response) {
    response.send(`List of the people: ${people}`);
});
