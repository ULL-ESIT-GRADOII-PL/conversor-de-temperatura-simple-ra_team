"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function convert() {
  var result;
  var result2;
  var temp = original.value;
  var regexp = /([+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cf])/i;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
      result2 = num + 273.15 + " Kelvin";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    converted.innerHTML = result + "<br/>" + result2;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
