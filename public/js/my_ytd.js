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
const KILOMETERS = 'km';

const DISTANCE_TYPES = [
    MILES,
    KILOMETERS
];

const DISTANCE_TYPE_MAP = {
    [MILES]: 'Miles',
    [KILOMETERS]: 'Kilometers'
};

const MALE = 'M';
const FEMALE = 'F';
const OTHER = 'O';

const GENDER_TYPES = [
    MALE,
    FEMALE,
    OTHER
];

const GENDER_TYPE_MAP = {
    [MALE]: 'Male',
    [FEMALE]: 'Female',
    [OTHER]: 'Other'
};

const SLACK = 'slack';
const DISCORD = 'discord';

const PLATFORMS = [
    SLACK,
    DISCORD
];

const PLATFORM_MAP = {
    [SLACK]: 'Slack',
    [DISCORD]: 'Discord'
};

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

const DEFAULT_ICON = ':question:';

const MALE_ICONS_SLACK = {
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

const MALE_ICONS_DISCORD = {
    [ICE_SKATE]: ':ice_skate:',
    [INLINE_SKATE]: ':roller_skate:',
    [RIDE]: ':man_biking:',
    [ROW]: ':man_rowing_boat:',
    [RUN]: ':man_running:',
    [SKI]: ':skier:',
    [SURFING]: ':man_surfing:',
    [SWIM]: ':man_swimming:',
    [WALK]: ':man_walking:',
    [WHEELCHAIR]: ':man_in_manual_wheelchair:',
    [WORKOUT]: ':man_lifting_weights:',
    [YOGA]: ':man_in_lotus_position:'
};

const MALE_ICONS = {
    [DISCORD]: MALE_ICONS_DISCORD,
    [SLACK]: MALE_ICONS_SLACK
};

const FEMALE_ICONS_SLACK = {
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

const FEMALE_ICONS_DISCORD = {
    [ICE_SKATE]: ':ice_skate:',
    [INLINE_SKATE]: ':roller_skate:',
    [RIDE]: ':woman_biking:',
    [ROW]: ':woman_rowing-boat:',
    [RUN]: ':woman_running:',
    [SKI]: ':skier:',
    [SURFING]: ':woman_surfing:',
    [SWIM]: ':woman_swimming:',
    [WALK]: ':woman_walking:',
    [WHEELCHAIR]: ':woman_in_manual_wheelchair:',
    [WORKOUT]: ':woman_lifting_weights:',
    [YOGA]: ':woman_in_lotus_position:'
};

const FEMALE_ICONS = {
    [DISCORD]: FEMALE_ICONS_DISCORD,
    [SLACK]: FEMALE_ICONS_SLACK
};

const OTHER_ICONS_SLACK = {
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

const OTHER_ICONS_DISCORD = {
    [ICE_SKATE]: ':ice_skate:',
    [INLINE_SKATE]: ':roller_skate:',
    [RIDE]: ':person_biking:',
    [ROW]: ':canoe:',
    [RUN]: ':runner:',
    [SKI]: ':skier:',
    [SURFING]: ':person_surfing:',
    [SWIM]: ':person_swimming:',
    [WALK]: ':person_walking:',
    [WHEELCHAIR]: ':person_in_manual_wheelchair:',
    [WORKOUT]: ':person_lifting_weights:',
    [YOGA]: ':person_in_lotus_position:'
};

const OTHER_ICONS = {
    [DISCORD]: OTHER_ICONS_DISCORD,
    [SLACK]: OTHER_ICONS_SLACK
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
        distancetype: MILES,
        distancetypemap: DISTANCE_TYPE_MAP,
        distancetypes: DISTANCE_TYPES,
        gendertypemap: GENDER_TYPE_MAP,
        gendertypes: GENDER_TYPES,
        icongender: OTHER,
        loading: true,
        platform: SLACK,
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
 * @param {String} platform The platform the icon is for
 * @returns {String} The icon
 */
function icon(value, icongender, platform) {
    if (
        ICON_MAP[icongender] === undefined ||
        ICON_MAP[icongender][platform] === undefined ||
        ICON_MAP[icongender][platform][value] === undefined
    ) {
        return DEFAULT_ICON;
    }

    return ICON_MAP[icongender][platform][value];
}

const app = new Vue({ // eslint-disable-line no-undef,no-unused-vars
    el: '#app',
    distancetype: MILES,
    distancetypemap: DISTANCE_TYPE_MAP,
    distancetypes: DISTANCE_TYPES,
    gendertypemap: GENDER_TYPE_MAP,
    gendertypes: GENDER_TYPES,
    icongender: OTHER,
    loading: true,
    platform: SLACK,
    platforms: PLATFORMS,
    platformmap: PLATFORM_MAP,
    types: ACTIVITY_TYPES,
    ytd: {},
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
        'duration',
        'platform'
    ],
    template: '<div>{{type | icon(icongender, platform)}} {{duration | convert(type, distancetype) | round}}{{type | unit(distancetype)}}</div>',
    filters: {
        convert: convert,
        icon: icon,
        round: round,
        unit: unit
    }
});