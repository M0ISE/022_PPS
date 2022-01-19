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
  $("#TheQuestion").append(
    "Will increasing the subsidy of PrEP by the Pharmaceutical Benefits Scheme (PBS) to 100% be the best way to prevent HIV infections, or would that funding be better spent on educational campaigns to achieve a better outcome?<br><br>To assess the effectiveness of this we’ll be tracking a hybrid outcome of preventing Infections while also being cost-effective. Preferring prevention even if the cost of treating the disease could be technically cheaper."
  );
  $("#WhyThisQuestion").append(
    "Every 5 years Australia produces a National HIV Strategy, the current one lasting from 2018-2022 (Department of Health, 2018). Constructing this model could help decide choices in the future funding model for the Australian federal government in their 2023-2028 National HIV Strategy and hopefully play a part in helping to end HIV in Australia."
  );
  $("#StateOfTheArt").append(
    "In preparing this model I analysed two reported models in this field “Modelling the Epidemiological Impact and Cost-Effectiveness of PrEP for HIV Transmission in MSM in China” (Zhang Et Al, 2021). and “A Cost-effectiveness Analysis of HIV Preexposure Prophylaxis for Men Who Have Sex With Men in Australia” by (Schneider Et Al, 2014), for The Kirby Institute.<br><br>Within Lei Zhang Et Al’s model, they reported using a Compartmental Systems Dynamics Model for their simulating. Running the model six different times with a variety of different sets of assumptions in the coverage and effectiveness of PrEP. Their basis of cost-effectiveness was focused on the governmental and organisational side of the equation and less so on the patient end. Asking the question if China could afford the cost of care if nothing more was done to prevent infections. Then asking at which level of coverage or prevention was the cost then tolerable.<br><br>Karen Schneider Et Al used a different agent-based model for their simulation. Their model works to understand and answer a very precise question of how different strategies of providing PrEP affect the clinical and cost outcomes. Simulating from the transmission to progression. This was a very fascinating paper to read through and understand the level of detailed thought needed to accurately simulate the depth of interaction between these agents. While also tracking their progression and interactions with other agents. Probably because this model was conducted a few years before the PDS started to subsidise PrEP, but there was a lack of modelling in the effect that economic stratification has on people’s ability to afford the prescriptions as well as their access to education and access to protection.<br><br>With modelling the coverage of PrEP amounts the Australian population there needs to be a factorisation of how the cost of PrEP works itself into different strata of socioeconomic populations. Under the current PDS scheme, there are only two levels of subsidy which is a cost of $41.00 for general patients and $6.60 for concession card holders for each month’s prescription respectively. Compared to other countries this is an amazing price for PrEP, but we can still do better by not assuming that all people have the same access to education about these medications. While also factoring in how people’s attitudes towards PrEP influences their choices on how they priorities their budgeting. Even down to how affordable is a $41.00 or $6.60 prescription."
  );
  $("#ProposedApproachA").append(
    "Because we are asking questions about how the tweaking of policy settings affect the whole population we’ll construct our model using a systems dynamics approach. Allowing for us to adjust the interactions between different factors and see how then they play out within the population. Rather than an agent-based model which would tell us more about the interactions between agents than the interactions of the whole. <br><br>The central equation in our model is Infections Per Month (IpM) which is then broken down into 3 factors: 1. Viral Infection Rate (VIR), 2. PrEP Use (Pu), and 3. Condom Use (Cu). Each iteration will calculate the chance of infection, and then move them from the non-infected Population to the infected. the simulation runs until either the whole Population is infected or an unreasonable amount of time has passed."
  );
  $("#ProposedApproachB").append(
    "Viral Infection Rate (VIR):<br>After reading the Paper by (Schneider Et Al, 2014), I decided to base my VIR on a simplification of their approach. Removing factors like types and numbers of intercourse per month. This means that an assumption in this model is that each individual only engaged in one sex act per month. This will cause the infection chance and rate to be artificially lowered then in the reference population, but for the model, it simplified our population by not having the specify the ages of our persons, or the type of relationship if any, or different rates of intercourse between different persons within the population.<br>Using data from (AFAO 2021), VIR was broken down into four factors: 1. Achieved Undetectable Viral Load, 2. Receiving Treatment, 3. Status Awareness, and 4. Virulence.  From the report, we expected that about 20% of persons with HIV would have an unsuppressed viral load meaning they can infect another person. Using a simple Data Check I’ll test and see if the model is performing within the expected reference when combining the first three sub-factors.  The last sub-factor is virulence, Since we’re not factoring in the type of intercross being engaged in we’ll assume the highest virulence number which will ensure that we do not underestimate the chance of infection.<br><br>PrEP Use (Pu) and Condom Use (Cu):<br>Each of these is constructed in an identical way breaking down into three subfactors. 1. Adherence, 2. Patient Choice, and 3. Effectiveness. With Patient Choice being subsequently broken down into i) Education, ii) Affordability. Both are being modified by Economic Inaffordability (EI).<br><br>Adherence:<br>From my research, it became apparent that one of the issues with PrEP was the need to take a daily pill, when taken properly it is nearly 100% effective in preventing HIV infection. And yet, inconsistency when taking PrEP will cause the effectiveness of the medication to decrease, so it made sense to add this in as a factor. It makes even more sense when calculating Cu with an adherence of only 64% to proper use paradigms significantly decreasing the overall protection effectiveness. <br><br>Patient Choice:<br>When Calculating Patient Choice, I decided to take into account Education and Affordability. Affordability is a fraction of the population who can afford the specific form of protection based on the factor of Economic Inaffordability. Education takes into account additionally the percentage of the population who has been educated on the use and effectiveness of protection. Modifying that based on a factor of Economic Inaffordability. Assuming that a person who has less of an ability to afford the particular type of protection will also be less likely to have received the proper education on particular types of protection. Upon reflecting, this is a pretty biased and privileged assumption to be made especially since I conduction no research to confirm this.<br><br>Economic Inaffordability:<br>This factor is modified to represent the percentage of the population who cannot afford Protection. 90% Inaffordability means that only 10% of the population can afford protection. When 10% Inaffordability means that 90% of the population can afford protection.<br><br>Effectiveness:<br>Finally, effectiveness is the base factor of protection a person has when exposed to HIV while using that specific type of protection.  Again this could be varied if we were taking into account the kind of intercourse engaged in, but for simplicity, in the modelling approach, we are conducting we aren’t doing that."
  );
  $("#Discussion").append(
    "In general, the results show that as the percentage of the population that was unable to afford protection increased so did the rate of HIV infections. This increase only becomes evident in the long run."
  );
  $("#DiscussionA").append(
    "After 301 months or 25 years, the number of persons with HIV (PwH) is 9,441, which works out to about 31 infections per month (IpM) over that 25 year period which seems pretty manageable. This works out to be 372 new cases in one year which is pretty similar to the number of new infections in 2019 of 316 (AFAO 2021)."
  );
  $("#DiscussionB").append(
    "But as the number of PwH increases so does the infection rate. Just 12.5 years later the number of PwH is 28,577. This means that over the 12.5 years of this simulation the number of IpM is 127, a four times increase in IpM. At that rate, a year’s worth of infections would be 1,524."
  );
  $("#DiscussionC").append(
    "Just 25 years later the number of PwH is 203,160. In that last 12.5 year period, the number of IpM is 801, over that year we’d expect 49,659 infections. It takes time for the exponential effect of increased numbers of infections to become noticeable. A lack of mitigation 62 years ago within the simulation leads to a catastrophic pandemic in 2083."
  );
  $("#DiscussionD").append(
    "Comparing this outlook to 90% of the population being unable to afford PrEP and Condoms to only 10% we see a startling difference. Only 1,662 PwH and only 1 IpM. And from the graph of infection rates, we can see that the number of infections is increasing over time and if we projected out further then it will increase to the levels seen in the 90% simulation by the year 5408, 3387 years into the future. So, our simulation does show that increasing affordability will lower the risk of infection and therefore save lives and money."
  );
  $("#DiscussionE").append(
    "Comparing the cost of treatment for an Inaffordability of 10% we see a total cost of 1.9 trillion which is a lot, but when compared to an Inaffordability of 90% we see a total cost of 60.6 trillion. showing that in the long run mitigating will save tens of trillions of dollars.<br>Yet, projecting further than this highlights an unforeseen limitation to the modelling approach chosen. Assuming the entire population is 20 years old at the start of the simulation the entire population would be 82 by this time which is currently the life expectancy for males within Australia. Meaning that approximately half of our population should have died at this point regardless of their HIV status and will almost certainly be dead soon. There also would be an increase in the population as more people are born which isn’t factored in. An underlying biased I had when constructing this model was that the effects of mitigation now would be evident within the next 10 years when modelled. That’s just not the case."
  );
  $("#DiscussionF").append(
    "The truth is that Australia is world-leading in its work to mitigate HIV and treat HIV. About 40% of the Australian MSM population regularly use PrEP. If we simulate at 40% by the time we get to 750 months (62.5 years) the total PwH is 119,082 which is certainly less than 203k but still not what you would call world-leading. Here we come across an error with an assumption in my model, that the affordability of PrEP and Condoms is the same. The reality of condom uses in Australia is that though you can buy them in-store, all sexual health clinics will offer free condom packs. And even without the free condoms assuming that the affordability of a $42 drug and a ¢50 condom is the same is a bad assumption and should be fixed in future iterations of this model. By either assuming condoms are a constant with some variability with affordability or removed in general. we can mitigate this by some degree by removing the Affordability fraction from the Condom use equation assuming that anyone can afford a Condom."
  );
  $("#DiscussionG").append(
    "When we factor in a more realistic condom Affordability factor into our model we see a dramatic 100k decrease in the case number projected at 19,991 PwH at 750 months.<br><br>Here we can see that there is a difference of 400k cases between subsidised Condoms and non-subsidised. It shows that having more protection prevents infections now. Thus changing the geometry of the cases, causing a smaller gradient of the curve leading into where we start to see exponent effects. It would be easy to read that this change in subsidy has little effect other than pushing out the exponential conversion further into the future, but in doing that you would also have to forget that we are modelling people’s lives in the real world. There are complexities in the reference model in the physical tangible world which will affect infection risks and treatment which mean that the longer the lead-in curve and thus the time till that exponential conversion of case numbers means that the exponential conversion might never happen.<br>It has been 40 years since the start of the Aids pandemic and three years since the start of the subsidy of PrEP by the PBS. If we institute a change in policy that lowers cases numbers over the next forty years who knows what new drugs and treatments will become available and thus change the lives of people into the future. An injectable version of PrEP is currently under clinical trials in now, If approved this almost completely removes the Adherence variable from the modelling. Factoring when and if technological advances will factor into a long term model is the next to wishful thinking. Rather it is our responsibility now to use the best modelling to see how to apply the best tools. So that we can create space for these new innovations rather than hoping for them to fix our problems today."
  );
  $("#Conclusion").append(
    "The model shows that increasing the affordability of PrEP decreases the case numbers of HIV. Saving trillions of dollars for the commonwealth over the next sixty years. It is hard to make a claim based on this model that increasing education funding would also lower case numbers because of a fault in the construction of the model. Yet, discovering the faults in the construction of the model and the assumptions it is based on it highlights the complexites inherent in modelling the relationships of people in the world over many years. Slight variances in the outset of the model can cause a variance of 400k when modelled far enough into the future.<br><br>In future models, I would experiment in an agent-based model so that we could add life span into the modelling as well as more details in the interactions of the agents in the model.<br><br>Overall this has highlighted for me the effect that small policy choices have today have onto into the future. Taking action now allows for there to be a greater chance of change into the future. "
  );
  $("#PrEPRefences").append(
    "Ending HIV. (2021). ABOUT UNDETECTABLE AND HIV. https://endinghiv.org.au/treat-early/about-undetectable/<br></br>Ending HIV. (2021). HIV treatments. https://endinghiv.org.au/treat-early/all-about-treatment/<br></br>Zhang, L., Peng, P., Wu, Y., Ma, X., Soe, N. N., Huang, X., Wu, H., Markowitz, M., & Meyers, K. (2018). Modelling the epidemiological impact and cost-effectiveness of prep for HIV transmission in MSM in China. AIDS and Behavior, 23(2), 523-533. https://doi.org/10.1007/s10461-018-2205-3<br></br>Schneider, K., Gray, R. T., & Wilson, D. P. (2014). A cost-effectiveness analysis of HIV Preexposure prophylaxis for men who have sex with men in Australia. Clinical Infectious Diseases, 58(7), 1027-1034. https://doi.org/10.1093/cid/cit946<br></br>AFAO. (2021). HIV IN AUSTRALIA. Australian Federation of AIDS Organisations. https://www.afao.org.au/wp-content/uploads/2020/12/HIV-in-Australia-2021.pdf<br></br>Department of Health. (2018). National HIV Strategy (8). Commonwealth of Australia. https://www1.health.gov.au/internet/main/publishing.nsf/Content/ohp-bbvs-1/$File/HIV-Eight-Nat-Strategy-2018-22.pdf<br></br>Monitoring HIV pre-exposure prophylaxis (Prep) uptake in Australia: Issue 1. (2021, June 29). Kirby Institute. https://kirby.unsw.edu.au/report/monitoring-hiv-prep-uptake-australia-issue1<br></br>Monitoring HIV pre-exposure prophylaxis (Prep) uptake in Australia: Issue 4. (2021, June 29). Kirby Institute. https://kirby.unsw.edu.au/report/monitoring-hiv-prep-uptake-australia-issue4<br></br>Simon, C. (2020). The SIR dynamic model of infectious disease transmission and its analogy with chemical kinetics. https://doi.org/10.26434/chemrxiv.12021342"
  );
});

$(document).load(function () {});
