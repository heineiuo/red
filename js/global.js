/**
 * 2015-4-20 17:45:55
 */

(function () {

  if (typeof define !== 'undefined' && define.amd) {
    define(['_'], factory)
  } else {
    window.red = factory()
  }



  function factory () {

    var html = document.children[0]
    var red = {}
