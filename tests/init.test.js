const test = require('ava')
const {getGoalByID, getGoals, putGoal} = require('../service/GoalService')

test.before(t => {
    t.context.expected = {
        'application/json': {
            "goalID": 0,
            "amount": 1.4658129,
            "months": 5,
            "userID": 6
        }
    };
})

test('getGoalByID test', async t => {
    const promise = await getGoalByID('test_user_id', 'test_goal_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})

test('getGoals test', async t => {
    const promise = await getGoals('test_user_id')
    t.deepEqual(promise, Array(2).fill(t.context.expected['application/json']))
})

test('putGoal test', async t => {
    const promise = await putGoal('test_body', 'test_user_id', 'test_goal_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})