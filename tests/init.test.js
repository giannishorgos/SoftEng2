const test = require('ava')
const {getGoalByID, getGoals, putGoal} = require('../service/GoalService')

test.before(t => {
    t.context.expected = {
        'application/json': {
            "goalID": 2,
            "goalAmount": 2200,
            "goalMonths": 2,
            "userID": 2
        }
    };
})

test('getGoalByID test', async t => {
    const promise = getGoalByID('test_user_id', 'test_goal_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})

test('getGoals test', async t => {
    const promise = getGoals('test_user_id')
    t.deepEqual(promise, Array(4).fill(t.context.expected['application/json']))
})

test('putGoal test', async t => {
    const promise = putGoal('test_body', 'test_user_id', 'test_goal_id')
    t.deepEqual(promise, t.context.expected['application/json'])
})