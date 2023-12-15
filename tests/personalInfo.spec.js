const test = require('ava')
const { got } = require('got-cjs')
const { getPersonalInfo, postPersonalInfo, putPersonalInfo } = require('../service/PersonalInfoService')

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
})

test('getPersonalInfo test', async t => {
    const promise = await getPersonalInfo('test_user_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})

test('postPersonalInfo test', async t => {
    const promise = await postPersonalInfo('test_body')
    t.deepEqual(promise, t.context.expected['application/json'])

})

test('putPersonalInfo test', async t => {
    const promise = await putPersonalInfo('test_body', 'test_user_id')
    t.deepEqual(promise, t.context.expected['application/json'])

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