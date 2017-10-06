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
module.exports = router;
