const lodash = require('lodash');

/**
 * Gets the site data
 * @returns {Object} site data
 */
function getSiteData() {
    return { baseUrl: process.env.FITNESS_HOSTNAME };
}

/**
 * Merge page data with the site data
 * @param {Object} data Page data to merge
 * @returns {Object} page data merged with site data
 */
function mergeData(data) {
    return lodash.merge({}, getSiteData(), data);
}

module.exports = {
    getSiteData: getSiteData,
    mergeData: mergeData
};