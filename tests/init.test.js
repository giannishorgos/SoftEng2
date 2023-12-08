const test = require('ava')
const { deleteIncomeBYID, getIncomeByID, getIncomes, putIncomebyID, postIncome } = require('../service/IncomeService')

test.before(t => {
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
})


test('deleteIncomeBYID test', async t => {
    const promise = await deleteIncomeBYID('test_user_id', 'test_income_id')
    t.is(promise, undefined)
})


test('getIncomeByID test', async t => {
    const promise = await getIncomeByID('test_user_id', 'test_income_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})


test('getIncomes test', async t => {
    const promise = await getIncomes('test_user_id')
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))

})


test('putIncomebyID test', async t => {
    const promise = await putIncomebyID('test_body', 'test_user_id', 'test_income_id')
    t.deepEqual(promise, t.context.expected['application/json'])

})


test('postIncome test', async t => {
    const promise = await postIncome('test_body', 'test_user_id')
    t.deepEqual(promise, t.context.expected['application/json'])

})
