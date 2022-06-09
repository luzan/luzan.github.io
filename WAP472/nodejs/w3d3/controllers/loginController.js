const indexView = (req, res) => {
    res.render("login", {
        title: "Login Page",
        warning: null
    } );
}

const loginPost = (req, res) => {
    console.log(req.body);

    let fakeData = {
        username: 'test@miu.edu',
        password: '123456789'
    }
    if(req.body == null) {
        console.log("body null")
        res.render("login", {
            title: "Login Page",
            warning: "Cannot sumbit empty data"
        })
    }
    if(req.body.username == fakeData.username && req.body.password == fakeData.password) {
        console.log("logged in");
        res.render("form", {
            title: "Form Page",
            data: null,
            isAuthenticated: true
        });
    } else {
        console.log("body null")
        res.render("login", {
            title: "Login Page",
            warning: "Username Password didn't match"
        })
    }
}

module.exports =  {
    indexView,
    loginPost
};