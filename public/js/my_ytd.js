/* eslint-env browser */
/* global moment:readonly */

import {
    DISTANCE_TYPES,
    DISTANCE_TYPE_MAP,
    GENDER_TYPE_MAP,
    GENDER_TYPES,
    DEFAULT_GENDER,
    DEFAULT_PLATFORM,
    DEFAULT_DISTANCE_TYPE,
    PLATFORMS,
    PLATFORM_MAP,
    ACTIVITY_TYPES
} from '/js/consts.js';

import {
    convert,
    icon,
    round,
    unit
} from '/js/utils.js';

const today = moment();
const janfirst = moment().startOf('year');

/**
 * Gets the data from the API when Vue is loaded
 * @returns {undefined}
 */
async function created() {
    const userData = await axios.get('/api/strava/ytd'); // eslint-disable-line no-undef

    this.setUserData(userData);
    this.loading = false;
}

/**
 * Gets the initial data
 * @returns {Object} The page data
 */
function data() {
    return {
        distancetype: DEFAULT_DISTANCE_TYPE,
        distancetypemap: DISTANCE_TYPE_MAP,
        distancetypes: DISTANCE_TYPES,
        gendertypemap: GENDER_TYPE_MAP,
        gendertypes: GENDER_TYPES,
        globalactivitycount: true,
        icongender: DEFAULT_GENDER,
        individualactivitycount: true,
        loading: true,
        platform: DEFAULT_PLATFORM,
        platformmap: PLATFORM_MAP,
        platforms: PLATFORMS,
        types: ACTIVITY_TYPES,
        year: today.year(),
        totaldays: today.diff(janfirst, 'days') + 1,
        ytd: {}
    };
}

/**
 * Sets the user data
 * @param {Object} response The response
 * @returns {undefined}
 */
function setUserData(response) {
    this.ytd = response.data;
    this.icongender = this.ytd.profile.sex;
}

/**
 * Copies the output box to the clipboard
 * @returns {undefined}
 */
function copyOutput() {
    const output = document.getElementById('ytd_output');
    navigator.clipboard.writeText(output.textContent);

    const notification = document.getElementById('clipboard_ok');
    notification.classList.remove('is-hidden');
}

const app = new Vue({ // eslint-disable-line no-undef,no-unused-vars
    el: '#app',
    loading: true,
    ytd: {},
    data,
    created,
    methods: {
        copyOutput: copyOutput,
        setUserData: setUserData
    }
});

Vue.component('type-entry', { // eslint-disable-line no-undef
    props: [
        'activitycount',
        'count',
        'distancetype',
        'duration',
        'icongender',
        'platform',
        'type'
    ],
    template: '<div>' +
                '<span v-html="$options.filters.icon(type, icongender, platform)"></span> ' +
                '<span v-if="activitycount">x{{ count }}</span> ' +
                '{{duration | convert(type, distancetype) | round(2, true)}}' +
                '{{type | unit(distancetype)}}' +
                '</div>',
    filters: {
        convert: convert,
        icon: icon,
        round: round,
        unit: unit
    }
});