const files = require.context('.', true, /\.js$/)

var configArray = []

files.keys().forEach((key) => {
  if (key === './index.js') return
  configArray = configArray.concat(files(key).default)
})
console.log(configArray.length)
export default configArray
