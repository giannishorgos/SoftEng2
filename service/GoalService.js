'use strict';


/**
 * Get one goal entry.
 *
 * userID Integer 
 * goalID Integer 
 * returns Goal
 **/
exports.getGoalByID = function(userID,goalID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 1.4658129,
  "goalID" : 0,
  "months" : 5,
  "userID" : 6
};
    if (Object.keys(examples).length > 0) {
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
exports.getGoals = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 1.4658129,
  "goalID" : 0,
  "months" : 5,
  "userID" : 6
}, {
  "amount" : 1.4658129,
  "goalID" : 0,
  "months" : 5,
  "userID" : 6
} ];
    if (Object.keys(examples).length > 0) {
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
exports.putGoal = function(body,userID,goalID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 1.4658129,
  "goalID" : 0,
  "months" : 5,
  "userID" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

