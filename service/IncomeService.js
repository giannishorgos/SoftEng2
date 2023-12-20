'use strict';


/**
 * Delete one income entry.
 *
 * userID Integer 
 * incomeID Integer 
 * no response value expected for this operation
 **/
exports.deleteIncomeBYID = function(userID, incomeID) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}


/**
 * Get one income entry.
 *
 * userID Integer 
 * incomeID Integer 
 * returns Income
 **/
exports.getIncomeByID = function(userID, incomeID, examples = {}) {
    return new Promise(function(resolve, reject) {
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Get incomes list for a specific user.
 *
 * userID Integer 
 * returns IncomesList
 **/
exports.getIncomes = function(userID, examples = {}) {
    return new Promise(function(resolve, reject) {
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

/**
 * Create an income entry.
 *
 * body Income Income Shema
 * userID Integer 
 * returns Income
 **/
exports.postIncome = function(body, userID, examples = {}) {
    return new Promise(function(resolve, reject) {
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Edit one income entry.
 *
 * body Income Income Shema
 * userID Integer 
 * incomeID Integer 
 * returns Income
 **/
exports.putIncomebyID = function(body, userID, incomeID, examples = {}) {
    return new Promise(function(resolve, reject) {
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

