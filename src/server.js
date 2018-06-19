const translate = require('./translator')

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

// translate.translateText(text, targetLang, (err, result) => {
//   if (err) {
//     next(err)
//     return
//   }
//   console.log(result)
// })

translate.translateText2(text, targetLang)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))