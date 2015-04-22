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
;
autoWidth()
window.addEventListener('resize', autoWidth, false)

function autoWidth () {

  var w = window.innerWidth
  var classList = html.classList
  var widthNumArr = [768, 980, 1120]
  var widthClassArr = ['xs', 'sm', 'md', 'lg']

  widthNumArr.push(w)
  widthNumArr.sort(function(widthNumArr,widthClassArr){return widthNumArr>widthClassArr?1:-1})
  
  var wIndex = splitFind(widthNumArr, w, 0, 3)

  if (!inArray(widthClassArr[wIndex], classList)) {
    for (var i = 0; i < widthClassArr.length; i++) {
      classList.remove(widthClassArr[i])
    };
    classList.add(widthClassArr[wIndex])
  }

  if (widthClassArr[wIndex]=='lg') {
    if (!inArray('show-guide', classList)) {
      classList.add('show-guide')
    }
  } else {
    classList.remove('show-guide')
  }

}

function splitFind(arr,aim,start,end) {
  if(start>end) {
    return -2;
  }

  var mid=Math.round((start+end)/2);

  if (arr[start]==aim) {
    return start
  }
  else if (arr[end]==aim) {
    return end
  }
  else if(arr[mid]==aim) {
    return mid;
  }
  else if(arr[mid]>aim) {
    return splitFind(arr,aim,start,mid);
  }
  else if(arr[mid]<aim) {
    return splitFind(arr,aim,mid,end);
  }
  else {
    return -1;
  }

}

function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
    if(haystack[i] == needle) return true;
  }
  return false;
};
    return red
  }

})()