'use strict';

var utils = require('../utils/writer.js');
var PersonalInfo = require('../service/PersonalInfoService');

module.exports.getPersonalInfo = function getPersonalInfo (req, res, next, userID) {
  PersonalInfo.getPersonalInfo(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPersonalInfo = function postPersonalInfo (req, res, next, body) {
  PersonalInfo.postPersonalInfo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putPersonalInfo = function putPersonalInfo (req, res, next, body, userID) {
  PersonalInfo.putPersonalInfo(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
