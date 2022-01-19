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
      $("#blankSpace").show();
    } else {
      $("#blankSpace").hide();
    }
  });

  $("#showButtonEmbedded").click(function () {
    $("#modellingIFrame").slideUp(700);
    $("#showButtonEmbedded").hide();
    $("#hideButtonEmbedded").show();
  });

  $("#hideButtonEmbedded").click(function () {
    $("#modellingIFrame").slideDown(700);
    $("#hideButtonEmbedded").hide();
    $("#showButtonEmbedded").show();
  });

  $("#showButtonResults").click(function () {
    $("#resultGraphsContainer").slideUp(700);
    $("#hideButtonResults").hide();
    $("#showButtonResults").show();
  });

  $("#hideButtonResults").click(function () {
    $("#resultGraphsContainer").slideDown(700);
    $("#showButtonResults").hide();
    $("#hideButtonResults").show();
  });

  $("#showButtonPaper").click(function () {
    $("#paperTextPageContainer").slideUp(700);
    $("#hideButtonPaper").hide();
    $("#showButtonPaper").show();
  });

  $("#hideButtonPaper").click(function () {
    $("#paperTextPageContainer").slideDown(700);
    $("#showButtonPaper").hide();
    $("#hideButtonPaper").show();
  });

  $(document).mousemove(function () {
    if (
      $("#modellingIFrame").is(":hidden") &&
      $("#resultGraphsContainer").is(":hidden") &&
      $("#paperTextPageContainer").is(":hidden")
    ) {
      $("#blankSpacePrEP").show();
    } else {
      $("#blankSpace").hide();
    }
  });
});
