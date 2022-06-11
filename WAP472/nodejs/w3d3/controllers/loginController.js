const uuid = require('uuid')

const users = {
    "test@miu.edu": "123456789",
    "user2": "password2"
}

class Session {
    constructor(username, expiresAt) {
        this.username = username
        this.expiresAt = expiresAt
    }

    isExpired() {
        this.expiresAt < (new Date())
    }
}

const sessions = {}

const getSessions = () => {
    return sessions;
}

const indexView = (req, res) => {
    res.render("login", {
        title: "Login Page",
        warning: null
    } );
}

const loginPost = (req, res) => {
    console.log(req.body);
    // get users credentials from the JSON body
    const { username, password } = req.body
    
    if (!username) {
        // If the username isn't present, return an HTTP unauthorized code
        res.render("login", {
            title: "Login Page",
            warning: "Cannot sumbit empty data"
        })
        return
    }

    // validate the password against our data
    // if invalid, send an unauthorized code
    const expectedPassword = users[username]
    if (!expectedPassword || expectedPassword !== password) {
        res.render("login", {
            title: "Login Page",
            warning: "Username/Password didn't matched"
        })
        return
    }

    // generate a random UUID as the session token
    const sessionToken = uuid.v4()

    // set the expiry time as 120s after the current time
    const now = new Date()
    const expiresAt = new Date(+now + 120 * 1000)

    // create a session containing information about the user and expiry time
    const session = new Session(username, expiresAt)
    // add the session information to the sessions map
    sessions[sessionToken] = session

    // In the response, set a cookie on the client with the name "session_cookie"
    // and the value as the UUID we generated. We also set the expiry time
    res.cookie("session_token", sessionToken, { expires: expiresAt })
    res.redirect('/form');

}

const logoutGet = function () { 
    if (!req.cookies) {
        res.status(401).end()
        return
    }

    const sessionToken = req.cookies['session_token']
    if (!sessionToken) {
        res.status(401).end()
        return
    }

    delete sessions[sessionToken]

    res.cookie("session_token", "", { expires: new Date() })
    res.redirect('/')
 }

module.exports =  {
    indexView,
    loginPost,
    logoutGet,
    getSessions
};