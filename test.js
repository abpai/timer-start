var Timer = require('./')
var start = 0

var timer = new Timer()
timer.start()

setInterval(function () {
  start += 1
  console.log('isTrue', timer.seconds === start)
}, 1000)
