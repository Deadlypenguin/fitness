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
        icongender: DEFAULT_GENDER,
        loading: true,
        platform: DEFAULT_PLATFORM,
        platforms: PLATFORMS,
        platformmap: PLATFORM_MAP,
        types: ACTIVITY_TYPES,
        year: moment().year(), // eslint-disable-line no-undef
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

const app = new Vue({ // eslint-disable-line no-undef,no-unused-vars
    el: '#app',
    loading: true,
    ytd: {},
    data,
    created,
    methods: { setUserData: setUserData }
});

Vue.component('type-entry', { // eslint-disable-line no-undef
    props: [
        'type',
        'distancetype',
        'icongender',
        'duration',
        'platform'
    ],
    template: '<div><span v-html="$options.filters.icon(type, icongender, platform)"></span> {{duration | convert(type, distancetype) | round}}{{type | unit(distancetype)}}</div>',
    filters: {
        convert: convert,
        icon: icon,
        round: round,
        unit: unit
    }
});