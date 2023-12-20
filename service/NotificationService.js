'use strict';


/**
 * Get notifications list for a specific user.
 *
 * userID Integer 
 * returns NotificationsList
 **/
exports.getNotifications = function(userID, examples = {}) {
  return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = [ {
//   "text" : "text",
//   "userID" : 0,
//   "notificationDate" : "2000-01-23T04:56:07.000+00:00"
// }, {
//   "text" : "text",
//   "userID" : 0,
//   "notificationDate" : "2000-01-23T04:56:07.000+00:00"
// } ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

