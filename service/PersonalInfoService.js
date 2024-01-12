'use strict';


/**
 * Get personal info to display in profile page.
 *
 * userID Integer 
 * returns User
 **/
exports.getPersonalInfo = function(userID, examples = {}) {
  return new Promise((resolve) => {
    if (userID && Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post personal info when creating account
 *
 * body User User Shema
 * returns User
 **/
exports.postPersonalInfo = function(body, examples = {}) {
  return new Promise((resolve) => {
    if (body && Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit personal info.
 *
 * body User User Shema
 * userID Integer 
 * returns User
 **/
exports.putPersonalInfo = function(body,userID, examples = {}) {
  return new Promise((resolve) => {
    if (body && userID && Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

