const path = require('path');
const lodash = require('lodash');

const module_assets = {
    '/css/bulma.min.css': '/node_modules/bulma/css/bulma.min.css',
    '/js/vue.min.js': '/node_modules/vue/dist/vue.min.js',
    '/js/axios.min.js': '/node_modules/axios/dist/axios.min.js',
    '/js/moment.min.js': '/node_modules/moment/min/moment.min.js',
    '/js/jquery.slim.min.js': '/node_modules/jquery/dist/jquery.slim.min.js',
    '/css/fontawesome.min.css': '/node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css',
    '/css/solid.min.css': '/node_modules/@fortawesome/fontawesome-free/css/solid.min.css',
    '/css/brands.min.css': '/node_modules/@fortawesome/fontawesome-free/css/brands.min.css',
    '/webfonts/fa-solid-900.woff': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
    '/webfonts/fa-solid-900.woff2': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
    '/webfonts/fa-solid-900.ttf': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf',
    '/webfonts/fa-solid-900.eot': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot',
    '/webfonts/fa-solid-900.svg': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg',
    '/webfonts/fa-brands-400.woff': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
    '/webfonts/fa-brands-400.woff2': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
    '/webfonts/fa-brands-400.ttf': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf',
    '/webfonts/fa-brands-400.eot': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot',
    '/webfonts/fa-brands-400.svg': '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg'
};

/**
 * Gets the asset from the node modules
 * @param {Object} req The request
 * @param {Object} res The response
 * @param {Object} next The next method
 * @returns {undefined}
 */
function getAsset(req, res, next) {
    const url = req.url;

    if (lodash.has(module_assets, url)) {
        res.sendFile(path.join(__dirname, '..', lodash.get(module_assets, url)));
    } else {
        next();
    }
}

/**
 * Verifies that we have a user already
 * @param {Object} req The request
 * @param {Object} res The response
 * @param {Object} next The next method
 * @returns {undefined}
 */
function verifyAuth(req, res, next) {
    req.session.origin = req.originalUrl;

    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

/**
 * Returns an error if the request is unknown
 * @param {Object} req The request
 * @param {Object} res The response
 * @returns {undefined}
 */
function error(req, res) {
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
}

/**
 * Redirects to the original page after login if requested
 * @param {Object} req The request
 * @param {Object} res The response
 * @returns {undefined}
 */
function postAuthRedirect(req, res) {
    let url = '/';

    if (req.session && req.session.origin) {
        url = req.session.origin;
    }

    if (req.session) {
        delete req.session.origin;
    }

    res.redirect(url);
}

module.exports = {
    error: error,
    getAsset: getAsset,
    module_assets: module_assets,
    postAuthRedirect: postAuthRedirect,
    verifyAuth: verifyAuth
};