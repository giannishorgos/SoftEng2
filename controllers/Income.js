'use strict';

var utils = require('../utils/writer.js');
var Income = require('../service/IncomeService');

// Delete Income By ID
module.exports.deleteIncomeByID = function deleteIncomeByID (res, userID, incomeID) {
    Income.deleteIncomeByID(userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Get Income By ID
module.exports.getIncomeByID = function getIncomeByID (res, userID, incomeID) {
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
module.exports.getIncomes = function getIncomes(res, userID) {
    Income.getIncomes(userID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Post Income
module.exports.postIncome = function postIncome(res, body, userID) {
    Income.postIncome(body, userID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

// Put Income By ID
module.exports.putIncomebyID = function putIncomebyID(res, body, userID, incomeID) {
    Income.putIncomebyID(body, userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
