var logger = require('./index.js')('test.js')

// set your desired logging level (4 being all, 0 being errors)
logger.logLevel = 4

// turn on/off logging
logger.status = false
logger.status = true

// start logging!
logger.info("I'm informing you of something")
logger.log("I'm", "logging", "something", "for", "you")
logger.success("I'm showing you how well you did at something")
logger.warning("I'm", "warning", "you", "that", "something", "may", "be", "going", "wrong")
logger.error("I'm warning you that something went very wrong")

// set how you want your date to be displayed
// hh: hour, mm: minute, ss: second, dd: day, yyyy: year, MM: month
logger.dateFormat = "[ss:mm:hh]"
logger.success("We changed the date format")
logger.dateFormat = "[hh:mm:ss]"