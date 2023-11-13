'use strict';


/**
 * Get personal info to display in profile page.
 *
 * userID Integer 
 * returns User
 **/
exports.getPersonalInfo = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "fullname" : "fullname",
  "userID" : 0,
  "email" : "email",
  "age" : 6,
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
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
exports.postPersonalInfo = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "fullname" : "fullname",
  "userID" : 0,
  "email" : "email",
  "age" : 6,
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
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
exports.putPersonalInfo = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "fullname" : "fullname",
  "userID" : 0,
  "email" : "email",
  "age" : 6,
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

