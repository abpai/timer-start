function Timer () {
  if (!(this instanceof Timer)) return new Timer()

  var _this = this
  this.seconds = 0

  this.start = function() {
    _this.stop()
    _this.resume()
  }

  this.stop = function() {
    _this.pause()
    _this.seconds = 0
  }

  this.pause = function() {
    clearInterval(_this.interval)
    delete _this.interval
  }

  this.resume = function() {
    if (_this.interval) return
    _this.interval = setInterval(function() {
      _this.seconds += 1
    }, 1000)
  }

}

/**
 * Export Timer
 */

module.exports = Timer
