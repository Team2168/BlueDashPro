function loadSetup() {
	initSettings();
    
    if (getSetting("teamkey") != null) document.getElementsByName("input-teamkey")[0].value = getSetting("teamkey").toString();
    if (getSetting("eventkey") != null) document.getElementsByName("input-eventkey")[0].value = getSetting("eventkey").toString();
    if (getSetting("streamurl") != null) {
        if (getSetting("streamurl") != "[none]") document.getElementsByName("input-streamurl")[0].value = getSetting("streamurl").toString();
    }
    if (getSetting("showsponsers") == 1) $("#input-showsponsers").prop("checked", true);
    $("#input-sponserpics").val(null);
    var oldsponserpics = JSON.parse(getSetting("sponserpics"));
    for (var i=0; i<oldsponserpics.length; i++) {
        var leader = "";
        if (i > 0) leader = "\n";
        document.getElementsByName("input-sponserpics")[0].value += leader + oldsponserpics[i];
    }
    
    document.getElementById("value-apikey").innerHTML = "<i>Hidden.</i>";
    document.getElementById("value-baseurl").innerHTML = getSetting("baseurl");
}

function checkMod() {
    var modded = false;
    if (getSetting("teamkey") != document.getElementsByName("input-teamkey")[0].value) modded = true;
    if (getSetting("eventkey") != document.getElementsByName("input-eventkey")[0].value) modded = true;
    if (document.getElementsByName("input-streamurl")[0].value != "[none]" || document.getElementsByName("input-streamurl")[0].value != "") {
        if (getSetting("streamurl") != document.getElementsByName("input-streamurl")[0].value) modded = true;
    }
    if (getSetting("showsponsers") == 0) {
        if ($("#input-showsponsers").prop("checked")) modded = true;
    } else {
        if (!$("#input-showsponsers").prop("checked")) modded = true;
    }
    if (getSetting("sponserpics") != JSON.stringify(document.getElementsByName("input-sponserpics")[0].value.split("\n"))) modded = true;
    
    if (modded) {
        document.getElementById("mod-status").innerHTML = "Modified, ";
        document.getElementById("save-status").innerHTML = "Not saved.";
    }
}

function loadDefaultPics() {
    var defaultpics = [];
    defaultpics[0] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/APS.png";
    defaultpics[1] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/COFCU.pn;g";
    defaultpics[2] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/constellat;ion-logo.png";
    defaultpics[3] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/DavisStandard.png";
    defaultpics[4] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/DoDSTEM.png";
    defaultpics[5] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/ETM.png";
    defaultpics[6] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Google.p;ng";
    defaultpics[7] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/GPS.png";
    defaultpics[8] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Groton";
    defaultpics[9] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Utiliti;es.png";
    defaultpics[10] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Hampden";
    defaultpics[11] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Engineer;ing.png";
    defaultpics[12] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Hillery.png";
    defaultpics[13] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/JSteele.png";
    defaultpics[14] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/L+M.png";
    defaultpics[15] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/MathWork;s.png";
    defaultpics[16] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/MysticWoman_sC;lub.png";
    defaultpics[17] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/PCC";
    defaultpics[18] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/STRU;CTURALS.png";
    defaultpics[19] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/pfizer.png";
    defaultpics[20] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/R-D.png";
    defaultpics[21] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Solidwor;ks.png";
    defaultpics[22] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/UBS_Logo.png";
    defaultpics[23] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/US_Air_Force_;Logo_Solid_Colour.svg.png";
    defaultpics[24] = "https://github.com/Team2168/BlueDashPro/raw/replace-images/img/sponsors/Walmart_logo.svg.png";

    $("#input-sponserpics").val(null);
    for (var i=0; i<defaultpics.length; i++) {
        var leader = "";
        if (i > 0) leader = "\n";
        document.getElementsByName("input-sponserpics")[0].value += leader + defaultpics[i];
    }
}

window.onload = loadSetup;
window.setInterval(checkMod, "1000");