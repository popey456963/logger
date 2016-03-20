const chalk = require('chalk')
var logger = function(m){
  this.normalName = m
  this.moduleName = ' [' + m
  while (this.moduleName.length < 8) { this.moduleName += ' ' }
  this.moduleName += '] '

  this.l = {
    error:   chalk.red,    // (0)
    warning: chalk.yellow, // (1)
    success: chalk.green,  // (2)
    log:     chalk.gray,   // (3)
    info:    chalk.gray,   // (4)
    date:    chalk.cyan
  }

  this.logLevel = 4
  this.status = true
}

logger.prototype.changeLength = function(length) {
  this.moduleName = ' [' + this.normalName
  while (this.moduleName.length < length) { this.moduleName += ' ' }
  this.moduleName += '] '
}

logger.prototype.date = function () {
  var date = new Date()
  return this.l.date('[' + String('00' + date.getHours()).slice(-2) + ':' + String('00' + date.getMinutes()).slice(-2) + ':' + String('00' + date.getSeconds()).slice(-2) + ']')
}

logger.prototype.error =   function (msg) { if (this.logLevel >= 0) this.print(msg, "error")   }
logger.prototype.warning = function (msg) { if (this.logLevel >= 1) this.print(msg, "warning") }
logger.prototype.success = function (msg) { if (this.logLevel >= 2) this.print(msg, "success") }
logger.prototype.log =     function (msg) { if (this.logLevel >= 3) this.print(msg, "log")     }
logger.prototype.info =    function (msg) { if (this.logLevel >= 4) this.print(msg, "info")    }

logger.prototype.print = function(msg, code) {
  var args = Array.prototype.slice.call(arguments);
  args.pop()
  args.pop()
  if (this.status) {
    console.log(this.date() + this.moduleName + this.l[code](msg))
  }
}

module.exports = function(m){ return new logger(m) };