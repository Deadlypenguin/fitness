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

module.exports = { verifyAuth: verifyAuth };