'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.getNotifications = function getNotifications (req, res, next, userID) {
  Notification.getNotifications(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
