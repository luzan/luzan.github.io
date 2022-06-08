const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
let data = {};
let userCounter = 0;

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});

app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, '', 'form.html'));
});

app.post("/", function (req, res, next) {
    data = req.body;
    userCounter++;
    res.redirect("/view");
});

app.get("/view", function (req, res, next) {
    let html = "";
    html += createLabel("Name", data["text-input"]);
    html += createLabel("Description", data["text-area"]);
    html += createLabel("Gender", data["radio-group"]);
    html += createLabel("Age Group", data.select);
    html += createLabel("Hobbies", data["checkbox-group"]);
    html += "<br><h3>User Count: " + userCounter + "</h3>";
    html += "<a href='/'> Go Back to Form</a> <br />";
    html += "<a href='/error'> Go to Error</a> <br />";
    html += "<a href='/no-page'> Gives 404</a> <br />";
    res.send(html);
});

app.get("/error", function(req, res, next) {
    res.send(error());
});

app.use(function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, '', '404.html'));
});

app.use(function (error, req, res, next) {
    res.status(500);
    res.sendFile(path.join(__dirname, '', 'error.html'));
});

function createLabel(key, value) {
    return "<label>" + key + ": " + value + "</label><br>"
}