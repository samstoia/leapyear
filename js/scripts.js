// ### Business / Back-End Logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  };
};

// ### User / Front-End Logic
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#yearInput").val())
    var result = leapYear(year)

    $(".year").text(year);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
