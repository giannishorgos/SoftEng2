'use strict';


/**
 * Get one goal entry.
 *
 * userID Integer 
 * goalID Integer 
 * returns Goal
 **/
exports.getGoalByID = function(userID, goalID, examples = {}) {
    return new Promise((resolve) => {
        if (userID && goalID && Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Get goals list for a specific user.
 *
 * userID Integer
 * returns GoalsList
 **/
exports.getGoals = function(userID, examples = {}) {
    return new Promise((resolve) => {
        if (userID && Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}



/**
 * Edit one goal entry.
 *
 * body Goal Goal Shema
 * userID Integer
 * goalID Integer
 * returns Goal
 **/
exports.putGoal = function(body, userID, goalID, examples = {}) {
    return new Promise((resolve) => {
        if (body && userID && goalID && Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

