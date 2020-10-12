var defaults = [];
defaults["teamkey"] = "frc2168";
defaults["eventkey"] = "2020mabri";
defaults["streamurl"] = "[auto]";
defaults["showsponsers"] = 1;
defaults["sponserpics"] = [
    "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/APS.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/COFCU.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/constellation-logo.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/DavisStandard.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/DoDSTEM.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/ETM.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Google.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/GPS.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Groton",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Utilities.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Hampden",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Engineering.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Hillery.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/JSteele.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/L+M.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/MathWorks.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/MysticWoman_sClub.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/PCC",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/STRUCTURALS.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/pfizer.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/R-D.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Solidworks.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/UBS_Logo.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/US_Air_Force_Logo_Solid_Colour.svg.png",
"https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Walmart_logo.svg.png"

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