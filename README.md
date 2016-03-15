# log-js

> A super-simple logging tool

```node.js
// require with your file name
var logger = require('log-js')('app.js')

// set your desired logging level (4 being all, 0 being errors)
this.logLevel = 3

// turn on/off logging
this.status = false
this.status = true

// start logging!
logger.info("I'm informing you of something")
logger.log("I'm logging something for you")
logger.success("I'm showing you how well you did at something")
logger.warning("I'm warning you that something may be going wrong")
logger.error("I'm warning you that something went very wrong")
```

![Console](https://i.imgur.com/tZyMx6k.png)
