$(document).ready(function () {
  $("#hideButton").click(function () {
    $("#artWorkImages").slideUp(700);
    $("#hideButton").hide();
    $("#showButton").show();
  });

  $("#showButton").click(function () {
    $("#artWorkImages").slideDown(700);
    $("#showButton").hide();
    $("#hideButton").show();
  });
});
