'use strict';

var utils = require('../utils/writer.js');
var Income = require('../service/IncomeService');

module.exports.deleteIncomeBYID = function deleteIncomeBYID(req, res, next, userID, incomeID) {
    Income.deleteIncomeBYID(userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

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

module.exports.getIncomes = function getIncomes(req, res, next, userID, examples = {}) {
    console.log('MPkhka sto income controller')
    Income.getIncomes(userID, examples)
        .then(function(response) {
            utils.writeJson(res, utils.respondWithCode(200, response));
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.postIncome = function postIncome(req, res, next, body, userID) {
    Income.postIncome(body, userID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.putIncomebyID = function putIncomebyID(req, res, next, body, userID, incomeID) {
    Income.putIncomebyID(body, userID, incomeID)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
