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

export const ACTIVITY_TYPES = [
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
export const DURATION = 'duration';
export const MINUTES = 'min';

export const MILES = 'mi';
const KILOMETERS = 'km';

export const DISTANCE_TYPES = [
    MILES,
    KILOMETERS
];

export const DISTANCE_TYPE_MAP = {
    [MILES]: 'Miles',
    [KILOMETERS]: 'Kilometers'
};

const MALE = 'M';
const FEMALE = 'F';
export const OTHER = 'O';

export const GENDER_TYPES = [
    MALE,
    FEMALE,
    OTHER
];

export const GENDER_TYPE_MAP = {
    [MALE]: 'Male',
    [FEMALE]: 'Female',
    [OTHER]: 'Other'
};

const SLACK = 'slack';
const DISCORD = 'discord';
const SOCIAL = 'social';

export const PLATFORMS = [
    SLACK,
    DISCORD,
    SOCIAL
];

export const PLATFORM_MAP = {
    [SLACK]: 'Slack',
    [DISCORD]: 'Discord',
    [SOCIAL]: 'Social'
};

export const UNIT_MAP = {
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

const DEFAULT_ICON_SLACK_DISCORD = ':question:';
const DEFAULT_ICON_SOCIAL = '&#x2753';

export const DEFAULT_ICON_MAP = {
    [SLACK]: DEFAULT_ICON_SLACK_DISCORD,
    [DISCORD]: DEFAULT_ICON_SLACK_DISCORD,
    [SOCIAL]: DEFAULT_ICON_SOCIAL
};
export const DEFAULT_DISTANCE_TYPE = MILES;
export const DEFAULT_PLATFORM = SLACK;
export const DEFAULT_GENDER = OTHER;

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

const ICONS_SOCIAL = {
    [ICE_SKATE]: '&#x26f8;',
    [INLINE_SKATE]: '&#x1f6fc;',
    [RIDE]: '&#x1f6b4;',
    [ROW]: '&#x1f6a3;',
    [RUN]: '&#x1f3c3;',
    [SKI]: '&#x26f7;',
    [SURFING]: '&#x1f3c4;',
    [SWIM]: '&#x1f3ca;',
    [WALK]: '&#x1f6b6;',
    [WHEELCHAIR]: '&#x1f9d1;',
    [WORKOUT]: '&#x1f3cb;',
    [YOGA]: '&#x1f9d8;'
};

const MALE_ICONS = {
    [DISCORD]: MALE_ICONS_DISCORD,
    [SLACK]: MALE_ICONS_SLACK,
    [SOCIAL]: ICONS_SOCIAL
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
    [SLACK]: FEMALE_ICONS_SLACK,
    [SOCIAL]: ICONS_SOCIAL
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
    [SLACK]: OTHER_ICONS_SLACK,
    [SOCIAL]: ICONS_SOCIAL
};

export const ICON_MAP = {
    [MALE]: MALE_ICONS,
    [FEMALE]: FEMALE_ICONS,
    [OTHER]: OTHER_ICONS
};