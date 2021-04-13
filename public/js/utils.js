import {
    UNIT_MAP,
    DURATION,
    MINUTES,
    ICON_MAP,
    DEFAULT_ICON_MAP,
    MILES
} from '/js/consts.js';

/**
 * Rounds a float
 * @param {Float} value The value to round
 * @param {Integer} decimals The number of decimals to round to
 * @param {Boolean} round_zero Round to the decimal only if it would display 0
 * @returns {Float} The rounded variable
 */
export function round(value, decimals, round_zero) {
    if (!value) {
        value = 0;
    }

    if (round_zero && value > 1) {
        decimals = 0;
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
export function unit(value, distancetype) {
    return UNIT_MAP[value] === DURATION ? MINUTES : distancetype;
}

/**
 * Converts the duration into smaller numbers
 * @param {Float} value The number of meters
 * @param {String} type The event type
 * @param {String} distancetype The type the distance is measured in
 * @returns {String} The duration
 */
export function convert(value, type, distancetype) {
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
export function icon(value, icongender, platform) {
    if (
        ICON_MAP[icongender] === undefined ||
        ICON_MAP[icongender][platform] === undefined ||
        ICON_MAP[icongender][platform][value] === undefined
    ) {
        return DEFAULT_ICON_MAP[platform];
    }

    return ICON_MAP[icongender][platform][value];
}