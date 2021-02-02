const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const passport = require('passport');
const StravaStrategy = require('passport-strava').Strategy;
const passportUtils = require('./utils/passport');

const indexRouter = require('./routes/index');
const myRouter = require('./routes/my');
const apiRouter = require('./routes/api');

passport.use(new StravaStrategy(passportUtils.strava.config, passportUtils.strava.authCallback));
passport.serializeUser(passportUtils.serializeUser);
passport.deserializeUser(passportUtils.deserializeUser);

app.set('view engine', 'ejs');

app.get('/css/bulma.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/bulma/css/bulma.min.css'));
});
app.get('/js/vue.min.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/vue/dist/vue.min.js'));
});
app.get('/js/axios.min.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/axios/dist/axios.min.js'));
});
app.get('/js/moment.min.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/moment/min/moment.min.js'));
});
app.get('/js/jquery.slim.min.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/jquery/dist/jquery.slim.min.js'));
});
app.get('/css/fontawesome.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'));
});
app.get('/css/solid.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/css/solid.min.css'));
});
app.get('/css/brands.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/css/brands.min.css'));
});
app.get('/webfonts/fa-solid-900.woff', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff'));
});
app.get('/webfonts/fa-solid-900.woff2', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2'));
});
app.get('/webfonts/fa-solid-900.ttf', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf'));
});
app.get('/webfonts/fa-solid-900.eot', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot'));
});
app.get('/webfonts/fa-solid-900.svg', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg'));
});
app.get('/webfonts/fa-brands-400.woff', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff'));
});
app.get('/webfonts/fa-brands-400.woff2', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2'));
});
app.get('/webfonts/fa-brands-400.ttf', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf'));
});
app.get('/webfonts/fa-brands-400.eot', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot'));
});
app.get('/webfonts/fa-brands-400.svg', function (req, res) {
    res.sendFile(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg'));
});

const session_data = {
    secret: process.env.SESSION_SECRET,
    maxAge: 6 * 60 * 60 * 1000
};

app.use(session(session_data));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/auth/strava', passport.authenticate('strava', passportUtils.strava.authConfig));
app.get('/auth/strava/callback', passport.authenticate('strava', passportUtils.strava.callbackConfig), function (req, res) {
    let url = '/';

    if (req.session && req.session.origin) {
        url = req.session.origin;
    }

    if (req.session) {
        delete req.session.origin;
    }

    res.redirect(url);
});

app.use('/', indexRouter);
app.use('/my', myRouter);
app.use('/api', apiRouter);

app.use(function (req, res){
    res.status(404);

    if (req.accepts('html')) {
        res.render('pages/error', { url: req.url });
        return;
    }

    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    res.type('txt').send('Not found');
});

module.exports = app;