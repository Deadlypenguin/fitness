const express = require('express');
const router = express.Router();

const lodash = require('lodash');

const strava = require('../../../utils/strava');
const routingUtils = require('../../../utils/routing');

const profileFields = [
    'type',
    'username',
    'sex'
];

router.get('/:year(\\d+)', routingUtils.verifyAuth, function (req, res) {
    let result = {
        profile: lodash.pick(req.user, profileFields),
        activities: {},
        size: 0
    };

    lodash.forEach(strava.constants.activity_types, function (activity_type) {
        result.activities[activity_type] = {
            count: 0,
            duration: 0
        };
    });

    strava.getActivitiesForYear(req.user.accessToken, req.params.year)
        .then(function (data) {
            result.size = lodash.size(data);

            lodash.forEach(data, function (activity) {
                let normalized_type = lodash.has(strava.constants.activity_map, activity.type) ?
                    lodash.get(strava.constants.activity_map, activity.type) :
                    activity.type;

                if (!lodash.includes(strava.constants.activity_types, normalized_type)) {
                    normalized_type = strava.constants.default_type;
                }

                const field_name = lodash.get(strava.constants.type_to_field_map, normalized_type);

                result.activities[normalized_type].duration += lodash.get(activity, field_name);
                result.activities[normalized_type].count += 1;
            });

            res.json(result);
        }).catch(function (error) {
            console.log(error);
            res.status(error.response.status).send({error: error.response.message});
        });
});

module.exports = router;