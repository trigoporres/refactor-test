"use strict";

const Translate = require('@google-cloud/translate');
const TranslateService = {};
const promises = [];
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

// TranslateService.translateText = (text, lang, callback) => {

//   let myPromise = new Promise((resolve, reject) => {
//     translate.translate(text, lang)
//       .then((res) => resolve(res[0]))
//       .catch((err) => reject(err))
//   })

//   promises.push(myPromise)

//   Promise.all(promises)
//     .then((values) => callback(null, values))
//     .catch((err) => next(err))
// }

TranslateService.translateText2 = (text, lang) => {
  return new Promise((resolve, reject) => {
    let myPromise = new Promise((resolve,reject) => {
      translate.translate(text, lang)
        .then((res) => resolve(res[0]))
        .catch((err) => reject(err))
    })

    promises.push(myPromise)

    Promise.all(promises)
      .then((values) => resolve(values))
      .catch((err) => reject(err))
  })
}

module.exports = TranslateService;
