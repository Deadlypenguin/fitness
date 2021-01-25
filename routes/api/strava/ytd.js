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

router.get('/', routingUtils.verifyAuth, function (req, res) {
    let result = {
        profile: lodash.pick(req.user, profileFields),
        activities: {},
        size: 0
    };

    lodash.forEach(strava.constants.activity_types, function (activity_type) {
        result.activities[activity_type] = 0;
    });

    strava.getActivitiesSinceNewYear(req.user.accessToken)
        .then(function (data) {
            result.size = lodash.size(data.data);

            lodash.forEach(data.data, function (activity) {
                let normalized_type = lodash.has(strava.constants.activity_map, activity.type) ?
                    lodash.get(strava.constants.activity_map, activity.type) :
                    activity.type;

                if (!lodash.includes(strava.constants.activity_types, normalized_type)) {
                    normalized_type = strava.constants.default_type;
                }

                const field_name = lodash.get(strava.constants.type_to_field_map, normalized_type);

                result.activities[normalized_type] += lodash.get(activity, field_name);
            });

            res.json(result);
        }).catch(function (error) {
            res.status(error.response.status).send({error: error.response.message});
        });
});

module.exports = router;