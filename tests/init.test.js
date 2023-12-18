const test = require('ava')

const { got } = require('got-cjs')
const {
    deleteExpenseByID,
    getExpenseByID,
    getExpenses,
    putExpenseByID,
    postExpense
} = require('../service/ExpenseService')


const { ResponsePayload, respondWithCode, writeJson } = require('../utils/writer')

test.before(t => {
    t.context.expected = {
        'application/json': {
            "expenseID": 0,
            "expenseAmount": 1.4658129,
            "expenseDate": "2000-01-23T04:56:07.000+00:00",
            "expenseSource": "expenseSource",
            "userID": 6,
            "expenseDescription": "expenseDescription"
        }
    };
    t.context.endpoint_expected = [
        {
            expenseAmount: 1000,
            expenseDate: '2017-07-21T17:32:28Z',
            expenseDescription: 'Expense from booking hotel room',
            expenseID: 1,
            expenseSource: 'Booking.com',
            userID: 1,
        },
        {
            expenseAmount: 30,
            expenseDate: '2017-07-21T17:32:28Z',
            expenseDescription: 'Expense from shopping',
            expenseID: 2,
            expenseSource: 'Supermarket',
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

test('ResponsePayload factory Test', t => {
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
test('deleteExpenseBYID test', async t => {
    const promise = await deleteExpenseByID('test_user_id', 'test_expense_id')
    t.is(promise, undefined)
})


test('getExpenseByID test', async t => {
    const promise = await getExpenseByID('test_user_id', 'test_expense_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getExpenseByID('test_user_id', 'test_expense_id')
    t.is(no_data_promise, undefined)
})


test('getExpenses test', async t => {
    let examples = {}
    examples['application/json'] = new Array(2).fill(t.context.expected['application/json'])
    const promise = await getExpenses('test_user_id', examples)
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))

    const no_data_promise = await getExpenses('test_user_id')
    t.is(no_data_promise, undefined)
})


test('putExpenseByID test', async t => {
    const promise = await putExpenseByID('test_body', 'test_user_id', 'test_expense_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await putExpenseByID('test_user_id', 'test_expense_id')
    t.is(no_data_promise, undefined)
})


test('postExpense test', async t => {
    const promise = await postExpense('test_body', 'test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await postExpense('test_user_id', 'test_expense_id')
    t.is(no_data_promise, undefined)
})

// =================== ENDPOINTS ===================
test('GET Expense test', async t => {
    const response = await got('user/1/expense', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})

test('POST Expense test', async t => {
    const response = await got.post('user/1/expense', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 201)
})

test('GET Expense ID test', async t => {
    const response = await got('user/1/expense/1', {
        prefixUrl: t.context.prefixUrl,
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

test('PUT Expense test', async t => {
    const response = await got.put('user/1/expense/1', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

test('DELETE Expense test', async t => {
    const response = await got.delete('user/1/expense/1', {
        prefixUrl: t.context.prefixUrl,
    }).json()
    t.deepEqual(response, '')
})

