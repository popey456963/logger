var logger = function(m){
  this.moduleName = m
}

var colour = require('colour')
var config = require('../config.js')
var levels = ['error', 'warn', 'info', 'debug', 'trace']
if (levels.indexOf(config.loggingLevel) > -1) {
  var level = levels.indexOf(config.loggingLevel)
} else {
  if (!isNaN(config.loggingLevel)) {
    var level = parseInt(config.loggingLevel)
  } else {
    console.log(('Invalid Config Logger Level: ' + config.loggingLevel).yellow)
    var level = 1
  }
}

logger.prototype.date = function () {
  var date = new Date()
  return ('[' + String('00' + date.getHours()).slice(-2) + ':' + String('00' + date.getMinutes()).slice(-2) + ':' + String('00' + date.getSeconds()).slice(-2) + ']').cyan
}

logger.prototype.s = function (msg) {
  // return String(JSON.stringify(msg))
  return String(msg)
}

logger.prototype.success = function (moduleName, msg) {
  moduleName = ' [' + moduleName + '] '
  while (moduleName.length < 9) {
    moduleName += ' '
  }
  console.log(this.date() + moduleName + this.s(msg).green)
}

logger.prototype.log = function (moduleName, msg) {
  moduleName = ' [' + moduleName + '] '
  while (moduleName.length < 9) {
    moduleName += ' '
  }
  console.log(this.date() + moduleName + this.s(msg).grey)
}

logger.prototype.debug = function (moduleName, msg) {
  moduleName = ' [' + moduleName + '] '
  while (moduleName.length < 9) {
    moduleName += ' '
  }
  console.log(this.date() + moduleName + this.s(msg).grey)
}

logger.prototype.warning = function (moduleName, msg) {
  moduleName = ' [' + moduleName + '] '
  while (moduleName.length < 9) {
    moduleName += ' '
  }
  console.log(this.date() + moduleName + this.s(msg).yellow)
}

logger.prototype.error = function (moduleName, msg) {
  moduleName = ' [' + moduleName + '] '
  while (moduleName.length < 9) {
    moduleName += ' '
  }
  console.log(this.date() + moduleName + this.s(msg).red)
}


module.exports = function(m){ return new logger(m) };