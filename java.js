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

  $("#TheProblem").append(
    "Human immunodeficiency virus (HIV) is a disease that we have no cure for as of yet. Without treatment, a person with HIV will eventually develop acquired immunodeficiency syndrome (AIDS) and again without treatment, they’ll typically survive three years. In the past, people with HIV and AIDS have been highly stigmatised in our society, with a lack of general understanding of how HIV is transmitted and treated. With the demonification of these people who were infected with the disease stalling progress on treatment for many years. With lasting cultural touchstones such as the Australian Grim Reaper AIDS Campaign (1987), there is a risk that the public’s sense of the state of treatment could be suck in the eighties, leaving a false perception about the state of treatment for persons with HIV or AIDS.<br><br>Prevention is no longer the only cure we’ve got. A Person infected with HIV in 2021 has a very different outlook than in 1987, people with HIV can live long and healthy lives when taking the proper antiviral treatments (Ending HIV, 2021). With 97% of patients receiving treatment being able to achieve what is called an Undetectable Viral load according to the Australian Federation of AIDS Organisations (AFAO 2021). What this means is that HIV viral load is so low it becomes all but Undetectable which means it is effectively Untransmittable (U=U) (Ending HIV, 2021). Yet, even with these advancements in treatment, there needs to be strict adherence to the treatment regimens to sustain a U=U status, alongside regular testing of the patient’s viral load to confirm their status.<br><br>On top of the significant personal reasons to prevent HIV infections, there are significant financial incentives. According to the AFAO, the total cost of treatment and care for a person with HIV is one million dollars over their lifetime (AFAO 2021). To use some crude math, if we could prevent one thousand infections of HIV through some intervention we’d save the Commonwealth one billion dollars in treatment costs of the lifetime of these individuals.<br><br>What is the best way to prevent HIV infections? The three best practical tools we have is physical protection Condoms, and chemical protection like Pre-Exposure Prophylaxis (PrEP) and Post-Exposure Prophylaxis (PEP). As well as behavioural choices like reducing the numbers of sexual partners sustained at a time and conducting regular sexual transmitted infection testing. On top of these tools is the need to educate people on the use and effectiveness of each approach and how they work together."
  );
});

$(document).load(function () {});
