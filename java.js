// function hideImages() {
//   var x = document.getElementById("artWorkImages");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

$(document).ready(function () {
  $("#hideButton").click(function () {
    $("#artWorkImages").slideToggle(700);

    var color = $("#colorSampler").css("color");
    $("#colorSampler").html();

    $("#hideButton").css("background-color", color);
  });
});
