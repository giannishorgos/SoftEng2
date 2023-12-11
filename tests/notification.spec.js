const test = require('ava')
const { getNotifications } = require('../service/NotificationService')

test.before(t => {
    t.context.expected = {
        'application/json': [ {
            "text" : "text",
            "userID" : 0,
            "notificationDate" : "2000-01-23T04:56:07.000+00:00"
          }, {
            "text" : "text",
            "userID" : 0,
            "notificationDate" : "2000-01-23T04:56:07.000+00:00"
          } ]
    };
})

test('getNotifications test', async t => {
    const promise = await getNotifications('test_user_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})