'use strict';

var utils = require('../utils/writer.js');
var Income = require('../service/IncomeService');

module.exports.deleteIncomeByID = function deleteIncomeByID(req, res, next, userID, incomeID) {
    Income.deleteIncomeByID(userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Get Income By ID
module.exports.getIncomeByID = function getIncomeByID(req, res, next, userID, incomeID) {
    return Income.getIncomeByID(userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
            return response
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Get Incomes
module.exports.getIncomes = function getIncomes(req, res, next, userID) {
    Income.getIncomes(userID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Post Income
module.exports.postIncome = function postIncome(req, res, next, body, userID) {
    Income.postIncome(body, userID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Put Income By ID
module.exports.putIncomebyID = function putIncomebyID(req, res, next, body, userID, incomeID) {
    Income.putIncomebyID(body, userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
