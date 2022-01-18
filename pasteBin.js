window.onload = function () {
  var moonCake = document.getElementsById("jsonData");

  console.log(JASON);

  var arr = ["John", "Peter", "Sally", "Jane"];

  var myJSON = JSON.stringify(moonCake);

  document.getElementById("demo").innerHTML = myJSON;
};

function hideImagesJQ() {
  var x = document.getElementById("artWorkImages");
  if (x.style.display === "none") {
    $("#show").click(function () {
      $("p").show();
    });
  } else {
    $("#hide").click(function () {
      $("p").hide();
    });
  }
}

onclick = "hideImages()";

$(document).ready(function () {
  $("#pageEvent").click(function () {
    if ($("#artWorkImages").is(":hidden")) {
      var backColor = $("#colorSampler").css("background-color");
      $("#colorSampler").html();
      $("#hideButton").css("background-color", backColor);
    } else if ($("#artWorkImages").is(":visible")) {
      var color = $("#colorSampler").css("color");
      $("#colorSampler").html();
      $("#hideButton").css("background-color", color);
    } else {
      $("#hideButton").css("background-color", "White");
    }
  });
});

$(document).mousemove(function () {
  if ($("#artWorkImages").is(":hidden")) {
    var backColor = $("#colorSampler").css("background-color");
    $("#colorSampler").html();
    $("#hideButton").css("background-color", backColor);
  } else if ($("#artWorkImages").is(":visible")) {
    var color = $("#colorSampler").css("color");
    $("#colorSampler").html();
    $("#hideButton").css("background-color", color);
  } else {
    $("#hideButton").css("background-color", "White");
  }
});
