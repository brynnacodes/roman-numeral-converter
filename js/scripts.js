//business logic
var romans = new Array();
romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

var decimals = new Array();
decimals = ["1000","900","500","400","100","90","50","40","10","9","5","4","1"];

var converter = function(numberInput) {

  if (numberInput <= 0 || numberInput >= 4000) {
    return numberInput;
  }
  };


//old spec:
// if (numberInput === "1") {
//   return "I"
// } else if (numberInput ==="2") {
//   return "II"
// } else if (numberInput ==="3") {
//   return "III"
// }
// };


//user interface

$(document).ready(function() {
  $("#roman-converter").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number-input").val());

    // alert(numberInput)

    var numberOutput = converter(numberInput);

    $("#numeral-results").text(numberOutput);

  });
});
