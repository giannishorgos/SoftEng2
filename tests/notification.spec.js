const test = require('ava')
const { got } = require('got-cjs')
const { getNotifications } = require('../service/NotificationService')

const { ResponsePayload, respondWithCode, writeJson } = require('../utils/writer')

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
        text : 'Υou have completed 25% of your monthly goal',
        userID : 1,
        notificationDate : '2017-07-21T17:32:28Z'
      },
      {
        text : 'Be careful! Υou have spent over than 75% of your monthly income',
        userID : 1,
        notificationDate : '2017-07-21T17:32:28Z'
      } 
    ]

    t.context.prefixUrl = 'https://virtserver.swaggerhub.com/KMYLONAS_1/SoftwareEngineering1/1.0.0/'

    t.context.response = body => ({
      writeHead: (code, headers) => {
          t.is(code, body.code)
          t.is(headers['Content-Type'], 'application/json')
      },
      end: payload => {
          t.deepEqual(JSON.parse(payload), body.payload)
      }
  })
})

test('getNotifications test', async t => {
    const promise = await getNotifications('test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getNotifications('test_user_id')
    t.deepEqual(no_data_promise, undefined)
})

test('GET Notifications test', async t => {
  const response = await got('user/1/notification', {
      prefixUrl: t.context.prefixUrl
  })
  t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
  t.is(response.statusCode, 200)
})

test.serial('Response Payload constructor Test', t => {
  const code = 200
  const payload = {key: 'value'}
  const response_obj = new ResponsePayload(code, payload)

  t.true(response_obj instanceof ResponsePayload)
  t.is(response_obj.code, code)
  t.is(response_obj.payload, payload)
})

test('RespondWithCode Test', t => {
  const code = 200
  const payload = {key: 'value'}
  const response = respondWithCode(code, payload)

  t.true(response instanceof ResponsePayload)
  t.is(response.code, code)
  t.is(response.payload, payload)
})

test.serial('writeJson Test', t => {
  const code = 200
  const payload = { ...t.context.expected }

  const body = respondWithCode(code, payload)
  const response = { ...t.context.response(body) }
  const response_code = {
      ...response, end: payload => {
          t.is(payload, body.code)
      }
  }
  writeJson(response, body)
  writeJson(response_code, 200, { message: 'status code in first arg' })
  writeJson(response, body.payload)
})