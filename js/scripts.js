//business logic

//romans is an array containing all of the characters to convert to:

var romans = new Array();
romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];


//decimals is an array containing the numbers that will be converted to their corresponding numeral

var decimals = new Array();
decimals = ["1000","900","500","400","100","90","50","40","10","9","5","4","1"];


//the variable converter is equal to a function that takes the parameter of numberInput(defined below in UI)

var converter = function(numberInput) {

//this if statement immediately deals with numbers that are less than or equal to 0, or greater than or equal to 4000, simply returning the numberInput variable

  if (numberInput <= 0 || numberInput >= 4000) {
    return numberInput;
  }

//the variable romanNumeral is defined as an empty string

    var romanNumeral = "";

//this for statement takes three parameters-the initialization parameter is a variable called i which is set to 0 (this tells the for loop where to start)-the condition parameter tells the loop to keep running as long as the variable i is less than the total length (note: .length is not a method, but rather a property of an array) of the romans array(12; so it will stop at the end of the romans array)-the final expression parameter is i++ which will change the initial value of i(initializing at 0) by one increment each time the loop is executed//
    for (var i=0; i < romans.length; i++) {

//this while loop tells the for loop to run as long as the following conditions in the block of code are true. The while loop runs while numberInput is less than or equal to the current value of i in the decimal array.
      while (numberInput >= decimals[i]) {

//if the while condition is true, the two statements below are executed. numberInput is decreased by whatever value is currently assinged to decimals at the current position in the array. It also makes romanNumeral equal to whichever value is currently held by i in the romans array.//
        numberInput -= decimals[i];
        romanNumeral += romans[i];
      }
    }

//when the for/while loop is finished running, it returns the new value of romanNumeral
    return romanNumeral;
  };

//user interface

$(document).ready(function() {
  $("#roman-converter").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number-input").val());

    var numberOutput = converter(numberInput);

    $("#numeral-results").text(numberOutput);

  });
});
