var translate = require('./translator')

var text = "quiero trabajar con los mejores"
var targetLang = 'en'

console.log(translate);

translate.translateText(text, targetLang, function (err, result) {

  if (err) {
    next(err);
    return;
  }
  console.log(result);

});