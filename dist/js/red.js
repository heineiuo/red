/**
 * 2015-4-20 17:45:55
 */

(function () {

  if (typeof define !== 'undefined' && define.amd) {
    define([], factory)
  } else {
    window.red = factory()
  }

  function factory () {
    var red = {}

    return red
  }

})