'use strict';

var utils = require('../utils/writer.js');
var Expense = require('../service/ExpenseService');

// Delete Expense By ID
module.exports.deleteExpenseByID = function deleteExpenseByID (req, res, next, userID, expenseID) {
  Expense.deleteExpenseByID(userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Get Expense By ID
module.exports.getExpenseByID = function getExpenseByID (req, res, next, userID, expenseID) {
  Expense.getExpenseByID(userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Get Expenses
module.exports.getExpenses = function getExpenses (req, res, next, userID) {
  Expense.getExpenses(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Post Expense
module.exports.postExpense = function postExpense (req, res, next, body, userID) {
  Expense.postExpense(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Put Expense
module.exports.putExpenseByID = function putExpenseByID (req, res, next, body, userID, expenseID) {
  Expense.putExpenseByID(body, userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
