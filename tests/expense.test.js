const test = require('ava')

const { got } = require('got-cjs')
const {
    deleteExpenseByID,
    getExpenseByID,
    getExpenses,
    putExpenseByID,
    postExpense
} = require('../service/ExpenseService')

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

// =================== SERVICES =================
// Delete Expense By ID Test Service
test('deleteExpenseBYID test', async t => {
    const promise = await deleteExpenseByID('test_user_id', 'test_expense_id')
    t.is(promise, undefined)
})


// Get Expense By ID Test Service
test('getExpenseByID test', async t => {
    const promise = await getExpenseByID('test_user_id', 'test_expense_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await getExpenseByID('test_user_id', 'test_expense_id')
    t.is(no_data_promise, undefined)
})


// Get Expenses Test Service
test('getExpenses test', async t => {
    let examples = {}
    examples['application/json'] = new Array(2).fill(t.context.expected['application/json'])
    const promise = await getExpenses('test_user_id', examples)
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))

    const no_data_promise = await getExpenses('test_user_id')
    t.is(no_data_promise, undefined)
})


// Put Expense By ID Test Service
test('putExpenseByID test', async t => {
    const promise = await putExpenseByID('test_body', 'test_user_id', 'test_expense_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await putExpenseByID('test_user_id', 'test_expense_id')
    t.is(no_data_promise, undefined)
})


// Post Expense Test Service
test('postExpense test', async t => {
    const promise = await postExpense('test_body', 'test_user_id', t.context.expected)
    t.deepEqual(promise, t.context.expected['application/json'])

    const no_data_promise = await postExpense('test_user_id', 'test_expense_id')
    t.is(no_data_promise, undefined)
})

// =================== ENDPOINTS ===================
// Get Expense Test Endpoint
test.serial('GET Expense test', async t => {
    const response = await got('user/1/expense', {
        prefixUrl: t.context.prefixUrl
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected)
    t.is(response.statusCode, 200)
})

// Post Expense Test Endpoint
test.serial('POST Expense test', async t => {
    const response = await got.post('user/1/expense', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 201)
})

// Get Expense ID Test Endpoint
test.serial('GET Expense ID test', async t => {
    const response = await got('user/1/expense/1', {
        prefixUrl: t.context.prefixUrl,
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

// Put Expense Test Endpoint
test.serial('PUT Expense test', async t => {
    const response = await got.put('user/1/expense/1', {
        prefixUrl: t.context.prefixUrl,
        json: t.context.endpoint_expected[0]
    })
    t.deepEqual(JSON.parse(response.body), t.context.endpoint_expected[0])
    t.is(response.statusCode, 200)
})

// Delete Expense Test Endpoint
test.serial('DELETE Expense test', async t => {
    const response = await got.delete('user/1/expense/1', {
        prefixUrl: t.context.prefixUrl,
    }).json()
    t.deepEqual(response, '')
})

