const test = require('ava')
const { got } = require('got-cjs')
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

    t.context.endpoint_expected = [ 
      {
        text : 'You have reached your monthly goal',
        userID : 1,
        notificationDate : '2023-09-21T04:56:07Z'
      },
      {
        text : 'You have spent 70% of your income this month',
        userID : 1,
        notificationDate : "2023-09-21T04:56:07Z"
      } 
    ]

    t.context.prefixUrl = 'https://virtserver.swaggerhub.com/KMYLONAS_1/SoftwareEngineering1/1.0.0/'
})

test('getNotifications test', async t => {
    const promise = await getNotifications('test_user_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})

test('GET Notifications test', async t => {
  const response = await got('user/1/notification', {
      prefixUrl: t.context.prefixUrl
  })
  t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
  t.is(response.statusCode, 200)
})