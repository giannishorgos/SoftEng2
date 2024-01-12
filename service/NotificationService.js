'use strict';


/**
 * Get notifications list for a specific user.
 *
 * userID Integer 
 * returns NotificationsList
 **/
exports.getNotifications = function(userID, examples = {}) {
  return new Promise((resolve) => {
    if (userID && Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

