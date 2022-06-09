
const formView = (req, res) => {
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

}

module.exports =  {
    formView,
    formPost,
    formReset
};