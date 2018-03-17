"use strict";

var Translate = require('@google-cloud/translate');
var async = require('async');

var TranslateService = {};
var translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = function (content, targetLang, next) {

  var calls = [];

  calls.push(function (callback) {

    translate
      .translate( content, targetLang )
      .then(results => {
        return callback(null, results[0]);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  });

  async.waterfall(calls, function (err, response) {
    if (next) next(err, response);
  });
};


module.exports = TranslateService;
