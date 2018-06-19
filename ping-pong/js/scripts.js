// BizLogic
var enteredNumber= function(number) {
  if (number % 5 === 0){
    return true;
  } else {
    return false;
  }
};


// UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#pingorpong").val());
    var result = enteredNumber(number)
    $(".result").text(result);
  });
});
