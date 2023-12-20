'use strict';


/**
 * Delete one expense entry.
 *
 * userID Integer
 * expenseID Integer
 * no response value expected for this operation
 **/
exports.deleteExpenseByID = function(userID, expenseID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one expense entry.
 *
 * userID Integer
 * expenseID Integer
 * returns Expense
 **/
exports.getExpenseByID = function(userID, expenseID, examples = {}) {
  return new Promise(function(resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get expenses list for a specific user.
 *
 * userID Integer
 * returns ExpensesList
 **/
exports.getExpenses = function(userID, examples = {}) {
  return new Promise(function(resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * Create an expense entry.
 *
 * body Expense Expense Shema
 * userID Integer
 * returns Expense
 **/
exports.postExpense = function(body, userID, examples = {}) {
  return new Promise(function(resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit one expense entry.
 *
 * body Expense Expense Shema
 * userID Integer
 * expenseID Integer
 * returns Expense
 **/
exports.putExpenseByID = function(body, userID, expenseID, examples = {}) {
  return new Promise(function(resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}