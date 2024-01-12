'use strict';

// Variables
var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

// Get Notifications
module.exports.getNotifications = function getNotifications (res, userID) {
  Notification.getNotifications(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
