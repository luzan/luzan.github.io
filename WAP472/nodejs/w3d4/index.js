const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile);

app.get("/", function (req, res, next) {
    let data = { Title: "Header", text: "My Paragraph" }
    let listData = [{ name: "Ram", courses: ["java", "javascript"] },
        { name: "Shyam", courses: ["Python", "Angular"] }];
    let tableData = { 
        Name:"Ram", 
        Courses:{ Java:2, Javascript:3},
        Location:"Fairfield",Availability:"Immediate"
    }
    
    res.render("index", {
        data: data,
        list: listData,
        table: tableData
    })
})

/*
Send Ajax get and post with the data to the server and 
let the server manipulate the sent data
and send it back to the client, 
change the UI 
(eg: text of the header, color of some element...)
with the data sent back from the server.
*/

app.get("/ajax", function (req, res, next) {
    res.render("display");
})

app.post("/ajax", function (req, res, next) {
    console.log(req.body);
    res.send(req.body);
})

app.listen(3000, () => { console.log("App running on port 3000"); });