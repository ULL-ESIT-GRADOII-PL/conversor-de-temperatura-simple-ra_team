"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function convert() {
    var result;
    var result2;
    var temp = original.value;
    var regexp = (/^([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*((?:[fF](?:[aA](?:[rR](?:[eE](?:[nN](?:[hH](?:[eE](?:[iI](?:[tT])?)?)?)?)?)?)?)?)|(?:[cC](?:[eE](?:[lL](?:[sS](?:[iI](?:[uU](?:[sS])?)?)?)?)?)?)|(?:[kK](?:[eE](?:[lL](?:[vV](?:[iI](?:[nN])?)?)?)?)?))\s*$/i);
    var m = temp.match(regexp);

    if (m) {
        var value = m[1];
        var unit = m[2];
        value = parseFloat(value);
        if (unit.charAt(0) == 'C' || unit.charAt(0) == 'c') {
            result = (value * 9 / 5) + 32;
            result = result.toFixed(1) + " Farenheit";
            result2 = value + 273.15 + " Kelvin";
        } else if (unit.charAt(0) == 'F' || unit.charAt(0) == 'f') {
            result = (value - 32) * 5 / 9;
            result2 = ((value + 459.67) + 5 / 9) + " Kelvin";
            result = result.toFixed(1) + " Celsius";
        } else {
            result = (value - 273.15) + " Celsius";
            result2 = ((value * 9 / 5) - 459.67) + " Farenheit";
        }
        alert(result);
    } else {
        alert("Invalid input! Please read the 'Usage' and 'Input Examples' sections.");
    }
}
