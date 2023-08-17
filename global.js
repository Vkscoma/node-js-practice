const express = require("express");
const app = express();
const port = 3000;
const people = require("./people");

app.get("/", function (req, res) {
    res.send("Express is working!");
    console.log(`${people.people} ${people.age}`);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.get("/people", function (request, response) {
    response.send(`List of the people: ${people.people}, List of their ages: ${people.age}`);
});
