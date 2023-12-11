const test = require('ava')
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