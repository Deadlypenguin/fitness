const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const lodash = require('lodash');
const passport = require('passport');
const StravaStrategy = require('passport-strava').Strategy;

const passportUtils = require('./utils/passport');
const routingUtils = require('./utils/routing');

const indexRouter = require('./routes/index');
const myRouter = require('./routes/my');
const apiRouter = require('./routes/api');

passport.use(new StravaStrategy(passportUtils.strava.config, passportUtils.strava.authCallback));
passport.serializeUser(passportUtils.serializeUser);
passport.deserializeUser(passportUtils.deserializeUser);

app.set('view engine', 'ejs');

app.get(lodash.keys(routingUtils.module_assets), routingUtils.getAsset);

const session_data = {
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000 }
};

app.use(session(session_data));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/auth/strava', passport.authenticate('strava', passportUtils.strava.authConfig));
app.get('/auth/strava/callback', passport.authenticate('strava', passportUtils.strava.callbackConfig), routingUtils.postAuthRedirect);

app.use('/', indexRouter);
app.use('/my', myRouter);
app.use('/api', apiRouter);

app.use(routingUtils.error);

module.exports = app;