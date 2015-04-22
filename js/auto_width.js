
window.addEventListener('resize', autoWidth, false)

function autoWidth () {

  var w = window.innerWidth
  var a = [768, 980, 1120]
  var b = ['xs', 'sm', 'md', 'lg']
  a.push(w)
  a.sort(function(a,b){return a>b?1:-1})
  var c = splitFind(a, w, 0, 2)

  console.log(c)

  var classList = document.children[0].classList
  if (!inArray(b[c], classList)) {
    for (var i = 0; i < b.length; i++) {
      classList.remove(b[i])
    };
    classList.add([c])
  }



}

function splitFind(arr,aim,start,end) {
  if(start>end)
    return -2;
  var mid=Math.round((start+end)/2);
  if (arr[start]==aim)
    return start
  else if (arr[end]==aim)
    return end
  else if(arr[mid]==aim)
    return mid;
  else if(arr[mid]>aim)
    return splitFind(arr,aim,start,mid);
  else if(arr[mid]<aim)
    return splitFind(arr,aim,mid,end);
  else
    return -1;
}

function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
    if(haystack[i] == needle) return true;
  }
  return false;
}