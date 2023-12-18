const test = require('ava')
const { got } = require('got-cjs')
const {
    deleteIncomeBYID,
    getIncomeByID,
    getIncomes,
    putIncomebyID,
    postIncome } = require('../service/IncomeService')


const { ResponsePayload, respondWithCode, writeJson } = require('../utils/writer')

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

test.serial('ResponsePayload constructor Test', t => {
    let code = 200, payload = { key: 'value' }
    let response_obj = new ResponsePayload(code, payload)

    t.true(response_obj instanceof ResponsePayload)
    t.is(response_obj.code, code)
    t.is(response_obj.payload, payload)
})

test('ReponsePayload factory Test', t => {
    let code = 200, payload = { key: 'value' }

    let respond = respondWithCode(code, payload)
    t.true(respond instanceof ResponsePayload)
    t.is(respond.code, code)
    t.is(respond.payload, payload)

})

test.serial('writeJSON Test', t => {
    let code = 200
    let payload = { ...t.context.expected }

    let body = respondWithCode(code, payload)
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

// =================== SERVICES ================= 
test('deleteIncomeBYID test', async t => {
    const promise = await deleteIncomeBYID('test_user_id', 'test_income_id')
    t.is(promise, undefined)
})


test('getIncomeByID test', async t => {
    const promise = await getIncomeByID('test_user_id', 'test_income_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getIncomeByID('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})


test('getIncomes test', async t => {
    let examples = {}
    examples['application/json'] = new Array(2).fill(t.context.expected['application/json'])
    const promise = await getIncomes('test_user_id', examples)
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))

    const no_data_promise = await getIncomes('test_user_id')
    t.is(no_data_promise, undefined)
})


test('putIncomebyID test', async t => {
    const promise = await putIncomebyID('test_body', 'test_user_id', 'test_income_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await putIncomebyID('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})


test('postIncome test', async t => {
    const promise = await postIncome('test_body', 'test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await postIncome('test_user_id', 'test_income_id')
    t.is(no_data_promise, undefined)
})

// =================== ENDPOINTS =================== 
test('GET Income test', async t => {
    const response = await got('user/1/income', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})

test('POST Income test', async t => {
    const response = await got.post('user/1/income', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 201)
})

test('GET Income ID test', async t => {
    const response = await got('user/1/income/1', {
        prefixUrl: t.context.prefixUrl,
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

test('PUT Income test', async t => {
    const response = await got.put('user/1/income/1', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

test('DELETE Income test', async t => {
    const response = await got.delete('user/1/income/1', {
        prefixUrl: t.context.prefixUrl,
    }).json()
    t.deepEqual(response, '')
})
