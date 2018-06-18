"use strict";

const Translate = require('@google-cloud/translate');
const async = require('async');

const TranslateService = {};
const calls = [];
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = function (content, targetLang, next) {

  calls.push((callback) => {

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
