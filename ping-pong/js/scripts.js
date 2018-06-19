// BizLogic
var emptyArray = []

var enteredNumber = function(number) {
  if (number % 10 === 0){
    emptyArray.push("I'm a ten!");
    $(".result").text(emptyArray);
  } else if (number % 5 === 0){
    return true;
  }
  else {
    emptyArray.push(number);
    $(".result").text(emptyArray);
  }
};


// UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#pingorpong").val());
    enteredNumber(number);
  });
});
