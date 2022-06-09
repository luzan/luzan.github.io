const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use('/', require('./routes/index'));
app.use('/form', require('./routes/form'));

app.use(function (req, res, next) {
    res.status(404);
    res.render("404");
});

app.use(function (error, req, res, next) {
    res.status(500);
    res.render("error");
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});