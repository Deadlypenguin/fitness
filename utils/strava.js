const moment = require('moment');
const axios = require('axios');

const TYPE = 'type';
const DISTANCE = 'distance';
const MOVING_TIME = 'moving_time';
const ELAPSED_TIME = 'elapsed_time';

const data_fields = [
    TYPE,
    DISTANCE,
    MOVING_TIME,
    ELAPSED_TIME
];

const ALPINE_SKI = 'AlpineSki';
const BACKCOUNTRY_SKI = 'BackcountrySki';
const CANOEING = 'Canoeing';
const CROSSFIT = 'Crossfit';
const EBIKE_RIDE = 'EBikeRide';
const ELLIPTICAL = 'Elliptical';
const HANDCYCLE = 'Handcycle';
const HIKE = 'Hike';
const ICE_SKATE = 'IceSkate';
const INLINE_SKATE = 'InlineSkate';
const KAYAKING = 'Kayaking';
const KITESURF = 'Kitesurf';
const NORDIC_SKI = 'NordicSki';
const RIDE = 'Ride';
const ROCK_CLIMBING = 'RockClimbing';
const ROLLER_SKI = 'RollerSki';
const ROW = 'Rowing';
const RUN = 'Run';
const SNOWBOARD = 'Snowboard';
const SNOWSHOE = 'Snowshoe';
const STAIR_STEPPER = 'StairStepper';
const SKI = 'Ski';
const SUP = 'StandUpPaddling';
const SURFING = 'Surfing';
const SWIM = 'Swim';
const VELOMOBILE = 'Velomobile';
const VIRTUAL_RIDE = 'VirtualRide';
const VIRTUAL_RUN = 'VirtualRun';
const WALK = 'Walk';
const WEIGHT_TRAINING = 'WeightTraining';
const WHEELCHAIR = 'Wheelchair';
const WINDSURF = 'Windsurf';
const WORKOUT = 'Workout';
const YOGA = 'Yoga';

const activity_types = [
    ICE_SKATE,
    INLINE_SKATE,
    RIDE,
    ROW,
    RUN,
    SKI,
    SURFING,
    SWIM,
    WALK,
    WHEELCHAIR,
    WORKOUT,
    YOGA
];

const type_to_field_map = {
    [ICE_SKATE]: ELAPSED_TIME,
    [INLINE_SKATE]: DISTANCE,
    [RIDE]: DISTANCE,
    [ROW]: DISTANCE,
    [RUN]: DISTANCE,
    [SKI]: DISTANCE,
    [SURFING]: ELAPSED_TIME,
    [SWIM]: DISTANCE,
    [WALK]: DISTANCE,
    [WHEELCHAIR]: DISTANCE,
    [WORKOUT]: ELAPSED_TIME,
    [YOGA]: ELAPSED_TIME
};

const activity_map = {
    [ALPINE_SKI]: SKI,
    [BACKCOUNTRY_SKI]: SKI,
    [CANOEING]: ROW,
    [CROSSFIT]: WORKOUT,
    [EBIKE_RIDE]: RIDE,
    [ELLIPTICAL]: RUN,
    [HANDCYCLE]: RIDE,
    [HIKE]: WALK,
    [KAYAKING]: ROW,
    [KITESURF]: ROW,
    [NORDIC_SKI]: SKI,
    [ROCK_CLIMBING]: WORKOUT,
    [ROLLER_SKI]: SKI,
    [SNOWBOARD]: SKI,
    [SNOWSHOE]: WALK,
    [STAIR_STEPPER]: WALK,
    [SUP]: ROW,
    [VELOMOBILE]: RIDE,
    [VIRTUAL_RIDE]: RIDE,
    [VIRTUAL_RUN]: RUN,
    [WEIGHT_TRAINING]: WORKOUT,
    [WINDSURF]: SURFING
};

/**
 * Get all the activities since the new year
 * @param {String} accessToken The access token
 * @returns {Object[]} The activities since the new year
 */
function getActivitiesSinceNewYear(accessToken) {
    const config = { headers: { Authorization: `Bearer ${accessToken}` }};
    const start = moment().utc().startOf('year').unix();
    const url = `https://www.strava.com/api/v3/athlete/activities?after=${start}`;

    return new Promise(function (resolve, reject) {
        axios.get(url, config)
            .then(resolve)
            .catch(reject);
    });
}

module.exports = {
    constants: {
        activity_map: activity_map,
        activity_types: activity_types,
        data_fields: data_fields,
        default_type: WORKOUT,
        type_to_field_map: type_to_field_map
    },
    getActivitiesSinceNewYear: getActivitiesSinceNewYear
};