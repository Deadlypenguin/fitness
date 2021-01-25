const ICE_SKATE = 'IceSkate';
const INLINE_SKATE = 'InlineSkate';
const RIDE = 'Ride';
const ROW = 'Rowing';
const RUN = 'Run';
const SKI = 'Ski';
const SURFING = 'Surfing';
const SWIM = 'Swim';
const WALK = 'Walk';
const WHEELCHAIR = 'Wheelchair';
const WORKOUT = 'Workout';
const YOGA = 'Yoga';

const ACTIVITY_TYPES = [
    ICE_SKATE,
    INLINE_SKATE,
    ROW,
    RIDE,
    RUN,
    SKI,
    SURFING,
    SWIM,
    WALK,
    WHEELCHAIR,
    WORKOUT,
    YOGA
];

const DISTANCE = 'distance';
const DURATION = 'duration';
const MINUTES = 'min';
const MILES = 'mi';

const MALE = 'M';
const FEMALE = 'F';
const OTHER = 'O';

const UNIT_MAP = {
    [ICE_SKATE]: DURATION,
    [INLINE_SKATE]: DISTANCE,
    [RIDE]: DISTANCE,
    [ROW]: DISTANCE,
    [RUN]: DISTANCE,
    [SKI]: DISTANCE,
    [SURFING]: DURATION,
    [SWIM]: DISTANCE,
    [WALK]: DISTANCE,
    [WHEELCHAIR]: DISTANCE,
    [WORKOUT]: DURATION,
    [YOGA]: DURATION
};

const MALE_ICONS = {
    [ICE_SKATE]: ':ice_skate:',
    [INLINE_SKATE]: ':roller_skate:',
    [RIDE]: ':bicyclist:',
    [ROW]: ':man-rowing-boat:',
    [RUN]: ':man-running:',
    [SKI]: ':skier:',
    [SURFING]: ':man-surfing:',
    [SWIM]: ':man-swimming:',
    [WALK]: ':man-walking:',
    [WHEELCHAIR]: ':man_in_manual_wheelchair:',
    [WORKOUT]: ':man-lifting-weights:',
    [YOGA]: ':man_in_lotus_position:'
};

const FEMALE_ICONS = {
    [ICE_SKATE]: ':ice_skate:',
    [INLINE_SKATE]: ':roller_skate:',
    [RIDE]: ':bicyclist:',
    [ROW]: ':woman-rowing-boat:',
    [RUN]: ':woman-running:',
    [SKI]: ':skier:',
    [SURFING]: ':woman-surfing:',
    [SWIM]: ':woman-swimming:',
    [WALK]: ':woman-walking:',
    [WHEELCHAIR]: ':woman_in_manual_wheelchair:',
    [WORKOUT]: ':woman-lifting-weights:',
    [YOGA]: ':woman_in_lotus_position:'
};

const OTHER_ICONS = {
    [ICE_SKATE]: ':ice_skate:',
    [INLINE_SKATE]: ':roller_skate:',
    [RIDE]: ':bicyclist:',
    [ROW]: ':canoe:',
    [RUN]: ':runner:',
    [SKI]: ':skier:',
    [SURFING]: ':surfer:',
    [SWIM]: ':swimmer:',
    [WALK]: ':walking:',
    [WHEELCHAIR]: ':manual_wheelchair:',
    [WORKOUT]: ':weight_lifter:',
    [YOGA]: ':person_in_lotus_position:'
};

const ICON_MAP = {
    [MALE]: MALE_ICONS,
    [FEMALE]: FEMALE_ICONS,
    [OTHER]: OTHER_ICONS
};

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
        loading: true,
        ytd: {},
        icongender: OTHER,
        distancetype: MILES,
        types: ACTIVITY_TYPES,
        year: moment().year() // eslint-disable-line no-undef
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
 * Rounds a float
 * @param {Float} value The value to round
 * @param {Integer} decimals The number of decimals to round to
 * @returns {Float} The rounded variable
 */
function round(value, decimals) {
    if (!value) {
        value = 0;
    }

    if (!decimals) {
        decimals = 0;
    }

    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return value;
}

/**
 * Gets the unit of measurement for a given type
 * @param {String} value The type
 * @param {String} distancetype The type the distance is measured in
 * @returns {String} The unit of measurement
 */
function unit(value, distancetype) {
    return UNIT_MAP[value] === DURATION ? MINUTES : distancetype;
}

/**
 * Converts the duration into smaller numbers
 * @param {Float} value The number of meters
 * @param {String} type The event type
 * @param {String} distancetype The type the distance is measured in
 * @returns {String} The duration
 */
function convert(value, type, distancetype) {
    if (UNIT_MAP[type] === DURATION) {
        return value / 60;
    }

    if (distancetype === MILES) {
        return value * 0.0006213712;
    }

    return value / 1000;
}

/**
 * Gets the icon for a given gender
 * @param {String} value The type to generate an icon for
 * @param {String} icongender The gender of the icon to get
 * @returns {String} The icon
 */
function icon(value, icongender) {
    return ICON_MAP[icongender][value];
}

const app = new Vue({ // eslint-disable-line no-undef,no-unused-vars
    el: '#app',
    ytd: {},
    loading: true,
    icongender: OTHER,
    distancetype: MILES,
    types: ACTIVITY_TYPES,
    year: moment().year(), // eslint-disable-line no-undef
    data,
    created,
    methods: { setUserData: setUserData }
});

Vue.component('type-entry', { // eslint-disable-line no-undef
    props: [
        'type',
        'distancetype',
        'icongender',
        'duration'
    ],
    template: '<div>{{type | icon(icongender)}} {{duration | convert(type, distancetype) | round}}{{type | unit(distancetype)}}</div>',
    filters: {
        convert: convert,
        icon: icon,
        round: round,
        unit: unit
    }
});