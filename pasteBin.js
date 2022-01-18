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
