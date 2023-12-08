const test = require('ava')
const { deleteExpenseByID, getExpenseByID, getExpenses, putExpenseByID, postExpense } = require('../service/ExpenseService')

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
    }
})

test('deleteExpenseByID test', async t => {
    const promise = await deleteExpenseByID('test_user_id', 'test_income_id')
    t.is(promise, undefined)
})

test('getExpenseByID test', async t => {
    const promise = await getExpenseByID('test_user_id', 'test_expense_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})

test('getExpenses test', async t => {
    const promise = await getExpenses('test_user_id')
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))
})

test('putExpenseByID test', async t => {
    const promise = await putExpenseByID('test_body', 'test_user_id', 'test_expense_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})

test('postExpense test', async t => {
    const promise = await postExpense('test_body', 'test_user_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})
