const test = require('ava')
const { got } = require('got-cjs')
const { getPersonalInfo, postPersonalInfo, putPersonalInfo } = require('../service/PersonalInfoService')

const { ResponsePayload, respondWithCode, writeJson } = require('../utils/writer')

test.before(t => {
    t.context.expected = {
        'application/json': {
            "password" : 'password',
            "fullname" : 'fullname',
            "userID" : 0,
            "email" : 'email',
            "age" : 6,
            "username" : 'username',
        }
    };
    t.context.endpoint_expected = {
        userID: 1,
        username: 'admin',
        fullname: 'John Doe',
        password: 'password',
        email: 'johnDoe@example.com',
        age: 70
    }
    t.context.prefixUrl = "https://virtserver.swaggerhub.com/KMYLONAS_1/SoftwareEngineering1/1.0.0/"

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

test('getPersonalInfo test', async t => {
    const promise = await getPersonalInfo('test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getPersonalInfo('test_user_id')
    t.deepEqual(no_data_promise, undefined)
})

test('postPersonalInfo test', async t => {
    const promise = await postPersonalInfo('test_body', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await postPersonalInfo('test_body')
    t.deepEqual(no_data_promise, undefined)
})

test('putPersonalInfo test', async t => {
    const promise = await putPersonalInfo('test_body', 'test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await putPersonalInfo('test_body', 'test_user_id')
    t.deepEqual(no_data_promise, undefined)
})

test('GET Personal Info test', async t => {
    const response = await got('user/1/personalinfo', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})

test('POST Personal Info test', async t => {
    const response = await got.post('user/personalinfo', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 201)
})

test('PUT Personal Info test', async t => {
    const response = await got.put('user/1/personalinfo', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected
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