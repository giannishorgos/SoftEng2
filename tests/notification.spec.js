const test = require('ava')
const { got } = require('got-cjs')
const { getNotifications } = require('../service/NotificationService')

test.before(t => {
    t.context.expected = {
        'application/json': [{
            "text": "text",
            "userID": 0,
            "notificationDate": "2000-01-23T04:56:07.000+00:00"
        }, {
            "text": "text",
            "userID": 0,
            "notificationDate": "2000-01-23T04:56:07.000+00:00"
        }]
    };

    t.context.endpoint_expected = [
        {
            text: 'Υou have completed 25% of your monthly goal',
            userID: 1,
            notificationDate: '2017-07-21T17:32:28Z'
        },
        {
            text: 'Be careful! Υou have spent over than 75% of your monthly income',
            userID: 1,
            notificationDate: '2017-07-21T17:32:28Z'
        }
    ]

    t.context.prefixUrl = 'https://virtserver.swaggerhub.com/KMYLONAS_1/SoftwareEngineering1/1.0.0/'
})

// Get Notifications Test Service
test('getNotifications test', async t => {
    const promise = await getNotifications('test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getNotifications('test_user_id')
    t.deepEqual(no_data_promise, undefined)
})

// Get Notifications Test Endpoint
test.serial('GET Notifications test', async t => {
    const response = await got('user/1/notification', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})
