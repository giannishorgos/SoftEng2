'use strict';

var utils = require('../utils/writer.js');
var Goal = require('../service/GoalService');

// Get Goal By ID
module.exports.getGoalByID = function getGoalByID (req, res, next, userID, goalID) {
  Goal.getGoalByID(userID, goalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Get Goals
module.exports.getGoals = function getGoals (req, res, next, userID) {
  Goal.getGoals(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Put Goal
module.exports.putGoal = function putGoal (req, res, next, body, userID, goalID) {
  Goal.putGoal(body, userID, goalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
