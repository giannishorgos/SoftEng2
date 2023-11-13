'use strict';

var utils = require('../utils/writer.js');
var Expense = require('../service/ExpenseService');

module.exports.deleteExpenseByID = function deleteExpenseByID (req, res, next, userID, expenseID) {
  Expense.deleteExpenseByID(userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExpenseByID = function getExpenseByID (req, res, next, userID, expenseID) {
  Expense.getExpenseByID(userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExpenses = function getExpenses (req, res, next, userID) {
  Expense.getExpenses(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postExpense = function postExpense (req, res, next, body, userID) {
  Expense.postExpense(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putExpenseByID = function putExpenseByID (req, res, next, body, userID, expenseID) {
  Expense.putExpenseByID(body, userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
