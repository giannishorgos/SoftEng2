'use strict';

var utils = require('../utils/writer.js');
var Expense = require('../service/ExpenseService');

// Delete Expense By ID
module.exports.deleteExpenseByID = function deleteExpenseByID (res, userID, expenseID) {
  Expense.deleteExpenseByID(userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Get Expense By ID
module.exports.getExpenseByID = function getExpenseByID (res, userID, expenseID) {
  Expense.getExpenseByID(userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Get Expenses
module.exports.getExpenses = function getExpenses (res, userID) {
  Expense.getExpenses(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Post Expense
module.exports.postExpense = function postExpense (res, body, userID) {
  Expense.postExpense(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Put Expense
module.exports.putExpenseByID = function putExpenseByID (res, body, userID, expenseID) {
  Expense.putExpenseByID(body, userID, expenseID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
