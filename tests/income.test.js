const test = require('ava')
const { got } = require('got-cjs')
const {
    deleteIncomeByID,
    getIncomeByID,
    getIncomes,
    putIncomebyID,
    postIncome } = require('../service/IncomeService')

test.before(async t => {
    t.context.expected = {
        'application/json': {
            "incomeID": 0,
            "incomeAmount": 1.4658129,
            "incomeDate": "2000-01-23T04:56:07.000+00:00",
            "incomeSource": "incomeSource",
            "userID": 6,
            "incomeDescription": "incomeDescription"
        }
    };
    t.context.endpoint_expected = [
        {
            incomeAmount: 1000,
            incomeDate: '2017-07-21T17:32:28Z',
            incomeDescription: 'Income investing on Google',
            incomeID: 1,
            incomeSource: 'Invesment',
            userID: 1,
        },
        {
            incomeAmount: 800,
            incomeDate: '2017-07-21T17:32:28Z',
            incomeDescription: 'Income investing on Google',
            incomeID: 2,
            incomeSource: 'Salary',
            userID: 1,
        },
    ]
    t.context.prefixUrl = "https://virtserver.swaggerhub.com/KMYLONAS_1/SoftwareEngineering1/1.0.0/"

})


// =================== SERVICES =================
// Delete Income By ID Test Service
test('deleteIncomeByID test', async t => {
    const promise = await deleteIncomeByID('test_user_id', 'test_income_id')
    t.is(promise, "done")
})


// Get Income By ID Test Service
test('getIncomeByID test', async t => {
    const promise = await getIncomeByID('test_user_id', 'test_income_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getIncomeByID('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})


// Get Incomes Test Service
test('getIncomes test', async t => {
    let examples = {}
    examples['application/json'] = new Array(2).fill(t.context.expected['application/json'])
    const promise = await getIncomes('test_user_id', examples)
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))

    const no_data_promise = await getIncomes('test_user_id')
    t.is(no_data_promise, undefined)
})


// Put Income By ID Test Service
test('putIncomebyID test', async t => {
    const promise = await putIncomebyID('test_body', 'test_user_id', 'test_income_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await putIncomebyID('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})


// Post Income Test Service
test('postIncome test', async t => {
    const promise = await postIncome('test_body', 'test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await postIncome('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})

// =================== ENDPOINTS ===================
// Get Income Test Endpoint
test.serial('GET Income test', async t => {
    const response = await got('user/1/income', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})

// Post Income Test Endpoint
test.serial('POST Income test', async t => {
    const response = await got.post('user/1/income', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 201)
})

// Get Income ID Test Endpoint
test.serial('GET Income ID test', async t => {
    const response = await got('user/1/income/1', {
        prefixUrl: t.context.prefixUrl,
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

// Put Income Test Endpoint
test.serial('PUT Income test', async t => {
    const response = await got.put('user/1/income/1', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

// Delete Income Test Endpoint
test.serial('DELETE Income test', async t => {
    const response = await got.delete('user/1/income/1', {
        prefixUrl: t.context.prefixUrl,
    }).json()
    t.deepEqual(response, '')
})
