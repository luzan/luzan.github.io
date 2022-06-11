
const { getSessions } = require("./loginController");
const sessions = getSessions();
const formView = (req, res) => {
    console.log(sessions);
    console.log("here");
    // if this request doesn't have any cookies, that means it isn't
    // authenticated. Return an error code.
    if (!req.cookies) {
        res.status(401)
        res.render("unauthorized")
        return
    }
    
    // We can obtain the session token from the requests cookies, which come with every request
    const sessionToken = req.cookies['session_token']
    if (!sessionToken) {
        // If the cookie is not set, return an unauthorized status
        res.status(401)
        res.render("unauthorized")
        return
    }
    console.log("here");
    
    // We then get the session of the user from our session map
    // that we set in the signinHandler
    console.log(sessions[sessionToken]);
    userSession = sessions[sessionToken]
    console.log("here");
    if (!userSession) {
        // If the session token is not present in session map, return an unauthorized error
        res.status(401)
        res.render("unauthorized")
        return
    }
    console.log("here");
    
    // if the session has expired, return an unauthorized error, and delete the 
    // session from our map
    if (userSession.isExpired()) {
        delete sessions[sessionToken]
        res.render("login", {
            title: "Login Page",
            warning: "Session Ended"
        })
        return
    }
    
    console.log('from cookie');
    console.log(req.cookies);
    res.render("form", {
        title: "Form Page",
        data : req.cookies
    });
}

const formPost = (req, res) => {
    let data = req.body;
    console.log(req.body)
    console.log(data.name);
    console.log(data.gender);
    res.cookie("name", data.name);
    res.cookie("description", data.description);
    res.cookie("gender", data.gender);
    res.cookie("ageGroup", data.ageGroup);
    res.cookie("hobbies", data.hobbies);

    res.render("form", {
        title: "Results",
        data : data
    });
}

const formReset = function(req, res) {
    res.clearCookie("name");
    res.clearCookie("description");
    res.clearCookie("gender");
    res.clearCookie("ageGroup");
    res.clearCookie("hobbies");
    
    res.redirect('/form');
}

module.exports =  {
    formView,
    formPost,
    formReset
};