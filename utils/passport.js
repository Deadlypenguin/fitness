const urljoin = require('url-join');

const stravaConfig = {
    clientID: process.env.STRAVA_CLIENT_ID,
    clientSecret: process.env.STRAVA_CLIENT_SECRET,
    callbackURL: urljoin(process.env.FITNESS_HOSTNAME, process.env.STRAVA_CALLBACK_URL)
};

const stravaAuthConfig = { scope: 'activity:read_all' };
const stravaCallbackConfig = { failureRedirect: '/login' };

/**
 * Sets up the user from Strava
 * @param {String} accessToken The access token
 * @param {String} refreshToken The refresh token
 * @param {Object} profile The user profile
 * @param {Function} cb The callback function
 * @returns {undefined}
 */
function stravaAuthCallback(accessToken, refreshToken, profile, cb) {
    const user = {
        type: 'strava',
        id: profile.id,
        username: profile._json.username,
        accessToken: accessToken,
        sex: profile._json.sex
    };

    cb(undefined, user);
}

/**
 * Serializes the user
 * @param {Object} user The user
 * @param {Function} done The done function
 * @returns {undefined}
 */
function serializeUser(user, done) {
    done(null, user);
}

/**
 * Deserializes the user
 * @param {Object} user The user
 * @param {Function} done The done function
 * @returns {undefined}
 */
function deserializeUser(user, done) {
    done(null, user);
}

module.exports = {
    serializeUser: serializeUser,
    deserializeUser: deserializeUser,
    strava: {
        config: stravaConfig,
        authConfig: stravaAuthConfig,
        callbackConfig: stravaCallbackConfig,
        authCallback: stravaAuthCallback
    }
};