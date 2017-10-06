var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect("/webapps/login")
});

router.get('/webapps/login', function (req, res, next) {
    res.render('index');
});

router.get('/idp/profile/SAML2/Redirect/SSO', function (req, res, next) {
    res.render('login');
});

router.post('/idp/profile/SAML2/Redirect/SSO', function (req, res, next) {
    res.render('login');
    var username = req.body.j_username;
    var password = req.body.j_password;
    console.log(username);
    console.log(password);
});


module.exports = router;
