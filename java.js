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

  $("#hideButtonEssay").click(function () {
    $("#fullEssayText").slideUp(700);
    $("#hideButtonEssay").hide();
    $("#showButtonEssay").show();
  });

  $("#showButtonEssay").click(function () {
    $("#fullEssayText").slideDown(700);
    $("#showButtonEssay").hide();
    $("#hideButtonEssay").show();
  });

  $(document).mousemove(function () {
    if (
      $("#artWorkImages").is(":hidden") &&
      $("#fullEssayText").is(":hidden")
    ) {
      $("#blankSpaceSuperposition").show();
    } else {
      $("#blankSpaceSuperposition").hide();
    }
  });

  $("#showButtonEmbedded").click(function () {
    $("#modellingIFrame").slideDown(500);
    $("#showButtonEmbedded").hide();
    $("#hideButtonEmbedded").show();
  });

  $("#hideButtonEmbedded").click(function () {
    $("#modellingIFrame").slideUp(500);
    $("#hideButtonEmbedded").hide();
    $("#showButtonEmbedded").show();
  });

  $("#showButtonResults").click(function () {
    $("#resultGraphsContainer").slideDown(500);
    $("#showButtonResults").hide();
    $("#hideButtonResults").show();
  });

  $("#hideButtonResults").click(function () {
    $("#resultGraphsContainer").slideUp(500);
    $("#hideButtonResults").hide();
    $("#showButtonResults").show();
  });

  $("#showButtonPaper").click(function () {
    $("#paperTextPageContainer").slideDown(500);
    $("#showButtonPaper").hide();
    $("#hideButtonPaper").show();
  });

  $("#hideButtonPaper").click(function () {
    $("#paperTextPageContainer").slideUp(500);
    $("#hideButtonPaper").hide();
    $("#showButtonPaper").show();
  });

  $(document).mousemove(function () {
    if (
      $("#modellingIFrame").is(":hidden") &&
      $("#resultGraphsContainer").is(":hidden") &&
      $("#paperTextPageContainer").is(":hidden")
    ) {
      $("#blankSpacePrEP").show();
    } else {
      $("#blankSpacePrEP").hide();
    }
  });
});
