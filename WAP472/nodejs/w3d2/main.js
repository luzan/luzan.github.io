const express = require('express');
const app = express();
app.listen(3000, () => { console.log('Your Server is running on 3000'); })
let count = 0;
app.get("/", function (req, res, next) {
    res.send("You are in root of API Server");
})

app.get("/create", function (req, res, next) {
    res.send("You are trying to create.");
})

app.get("/count", function (req, res, next) {
    count++;
    res.send("This is request number :" + count);
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    console.log('Authentication initialized for user id:', req.params.id)
    if(req.params.id == '1234')
        next()
    else
        res.redirect('/unauthorized');
})

app.get('/user/:id', (req, res, next) => {
    res.send('Welcome user ' + req.params.id)
})

app.get('/unauthorized', (req, res, next) => {
    res.send('User not in system');
})