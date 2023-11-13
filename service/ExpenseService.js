'use strict';


/**
 * Delete one expense entry.
 *
 * userID Integer 
 * expenseID Integer 
 * no response value expected for this operation
 **/
exports.deleteExpenseByID = function(userID,expenseID) {
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
exports.getExpenseByID = function(userID,expenseID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expenseAmount" : 1.4658129,
  "expenseID" : 0,
  "expenseDescription" : "expenseDescription",
  "expenseSource" : "expenseSource",
  "userID" : 6,
  "expenseDate" : "2000-01-23T04:56:07.000+00:00"
};
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
exports.getExpenses = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "expenseAmount" : 1.4658129,
  "expenseID" : 0,
  "expenseDescription" : "expenseDescription",
  "expenseSource" : "expenseSource",
  "userID" : 6,
  "expenseDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "expenseAmount" : 1.4658129,
  "expenseID" : 0,
  "expenseDescription" : "expenseDescription",
  "expenseSource" : "expenseSource",
  "userID" : 6,
  "expenseDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create one expense entry.
 *
 * body Expense Expense Shema
 * userID Integer 
 * returns Expense
 **/
exports.postExpense = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expenseAmount" : 1.4658129,
  "expenseID" : 0,
  "expenseDescription" : "expenseDescription",
  "expenseSource" : "expenseSource",
  "userID" : 6,
  "expenseDate" : "2000-01-23T04:56:07.000+00:00"
};
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
exports.putExpenseByID = function(body,userID,expenseID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expenseAmount" : 1.4658129,
  "expenseID" : 0,
  "expenseDescription" : "expenseDescription",
  "expenseSource" : "expenseSource",
  "userID" : 6,
  "expenseDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

