var defaults = [];
defaults["teamkey"] = "frc5980";
defaults["eventkey"] = "2019miwmi";
defaults["streamurl"] = "[auto]";
defaults["showsponsers"] = 1;
defaults["sponserpics"] = [
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/APS.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/COFCU.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/DavisStandard.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/DoDSTEM.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/ETM.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/GPS.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/Google.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/Groton%20Utilities.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/Hampden%20Engineering.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/Hillery.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/JSteele.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/L%2BM.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/MathWorks.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/MysticWoman_sClub.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/PCC%20STRUCTURALS.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/R-D.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/Solidworks.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/UBS_Logo.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/US_Air_Force_Logo_Solid_Colour.svg.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/Walmart_logo.svg.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/constellation-logo.png",
    "https://raw.githubusercontent.com/russella02/2168SponsorLogos/master/pfizer.png",
    
];

function loadDefaults(loadsetup) {
    initSettings();
    setSetting("teamkey", defaults["teamkey"]);
    setSetting("eventkey", defaults["eventkey"]);
    setSetting("showsponsers", defaults["showsponsers"]);
    setSetting("sponserpics", JSON.stringify(defaults["sponserpics"]));
    if (loadsetup) loadSetup();
    if (defaults["streamurl"] == "[auto]") {
        doTryGetStreamCustomEvent(defaults["eventkey"], false);
    } else {
        setSetting("streamurl", defaults["showsponsers"]);
    }
    if (loadsetup) {
        doSave();   
        loadSetup();
        doSave();
    }
}

function clearSetup() {
    document.getElementsByName("input-teamkey")[0].value = "";
    document.getElementsByName("input-eventkey")[0].value = "";
    document.getElementsByName("input-streamurl")[0].value = "";
    document.getElementsByName("input-sponserpics")[0].value = "";
    $("#input-showsponsers:checked").prop("checked", false);
    doSave();
    loadSetup();
}