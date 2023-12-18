const test = require('ava')

const { got } = require('got-cjs')
const {getGoalByID, getGoals, putGoal} = require('../service/GoalService')

test.before(t => {
    t.context.expected = {
        'application/json': {
            "goalID": 1,
            "amount": 1000,
            "months": 1,
            "userID": 1
        }
    };
    t.context.endpoint_expected = [
        {
            amount : 1000,
            goalID : 1,
            months : 1,
            userID : 1
        },
        {
            amount : 5000,
            goalID : 2,
            months : 6,
            userID : 1
        },
    ]
    t.context.prefixUrl = "https://virtserver.swaggerhub.com/KMYLONAS_1/SoftwareEngineering1/1.0.0/"
})

// =================== SERVICES =================
test('getGoalByID test', async t => {
    const promise = await getGoalByID('test_user_id', 'test_income_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getGoalByID('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})

test('getGoals test', async t => {
    let examples = {}
    examples['application/json'] = new Array(2).fill(t.context.expected['application/json'])
    const promise = await getGoals('test_user_id', examples)
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))

    const no_data_promise = await getGoals('test_user_id')
    t.is(no_data_promise, undefined)
})

test('putGoal test', async t => {
    const promise = await putGoal('test_body', 'test_user_id', 'test_income_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await putGoal('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})

// =================== ENDPOINTS ===================
test('GET Goal ID test', async t => {
    const response = await got('user/1/goal/0', {
        prefixUrl: t.context.prefixUrl,
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

test('GET Goal test', async t => {
    const response = await got('user/1/goal', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})

test('PUT Goal test', async t => {
    const response = await got.put('user/1/goal/0', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})