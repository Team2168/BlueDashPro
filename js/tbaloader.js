function doOnLoad() {
    if (getSetting("configured") != 1) {
        setSetting("configured", 1);
        loadDefaults(false);
        var delayedReload = function() { window.location.reload(); clearInterval(delayedReload); };
        setInterval(delayedReload, 3000);
    }
    /*var streamUrl = getSetting("streamurl");
    if (streamUrl != null && streamUrl != "[none]") {
        document.getElementById("streamFrame").src = streamUrl;
    }
    if (getSetting("streambroken")) {
        document.getElementById("streamFrame").src = "streamerror/broken.html";
    }*/
    //showHideSponsers();
    //fixStream();
    doInterval();
    loadRankTotal();
    loadSponserPics();
}

function doInterval() {
    loadEventData();
}

function loadSponserPics() {
    var newpics = JSON.parse(getSetting("sponserpics"));
    for (var i=0; i<newpics.length; i++) {
        document.getElementById("sponmarq").innerHTML += "<img src=\"" + newpics[i] + "\" height=\"90px\" class=\"pl-5\">";
    }
}

function loadRankTotal() {
    $.ajax({
        type: "GET",
        url: tbaUrl("/event/"+getSetting("eventkey")+"/teams/keys"),
        dataType: "json",
        success: function(data) {
            document.getElementById("rankTotal").innerHTML = data.length;
        }
    });
}

function formatTimeShow(h_24, m) {
    var h = h_24 % 12;
    if (h === 0) h = 12;
    return (h < 10 ? '0' : '') + h + ":" + m + (h_24 < 12 ? ' AM' : ' PM');
}

function loadEventData() {
    $.ajax({
        type: "GET",
        url: tbaUrl("/team/"+getSetting("teamkey")+"/event/"+getSetting("eventkey")+"/status"),
        dataType: "json",
        success: function(data) {
            loadLastMatch(data);
            loadNextMatch(data);
            loadTeamRank(data);
            loadTopRanks();
        }
    });
}

function loadTeamRank(data) {
    var element = document.getElementById("teamRanking");
    if (data != null) {
        var qualData = data.qual;
        if (qualData != null) {
            element.innerHTML = qualData.ranking.rank.toString();
        } else {
            element.innerHTML = "?";
        }
    }
}

function loadLookahead() {
    $.ajax({
        type: "GET",
        url: "https://sheets.googleapis.com/v4/spreadsheets/1aqKbIZXAx_HimcNqdp4XRxbU62frx-fB8NweF7tSYJU",
        dataType: "json",
        success: function(data) {
            console.log(data);
        }

    })
}

function loadTopRanks() {
    
    $.ajax({
        type: "GET",
        url: tbaUrl("/event/"+getSetting("eventkey")+"/rankings"),
        dataType: "json",
        success: function(data) {
            var rankData = data.rankings;
            var body = document.getElementById("rk_data");
            body.innerHTML = "";
            if (data != null) {
                for (var i = 0; i < rankData.length; i++) {
                    var row = body.insertRow(-1);
                    row.insertCell(-1).innerHTML = (i+1).toString();
                    row.insertCell(-1).innerHTML = rankData[i].team_key.toString().replace("frc", "");
                    var tMP = rankData[i].matches_played;
                    var tRP = rankData[i].extra_stats[0];
                    row.insertCell(-1).innerHTML = rankData[i].matches_played.toString();
                    row.insertCell(-1).innerHTML = rankData[i].extra_stats[0];
                    row.insertCell(-1).innerHTML = (tRP / tMP).toFixed(2).toString();
                    if (rankData[i].team_key.toString().replace("frc", "") == getSetting("teamkey").toString().replace("frc", "")) {
                        row.style = "background-color: lightgreen;"
                    }
                    else {
                        row.style = "";
                    }
                }
            }
        }
    });
}

function loadLastMatch(data) {
    var lastMatchKey = data.last_match_key;
    if (lastMatchKey != null) {
        $.ajax({
            type: "GET",
            url: tbaUrl("/match/"+lastMatchKey),
            dataType: "json",
            success: function(data) {
                document.getElementById("lastRedScore").innerHTML = data.alliances.red.score.toString();
                document.getElementById("lastBlueScore").innerHTML = data.alliances.blue.score.toString();
                document.getElementById("lastRedRP").innerHTML = data.score_breakdown.red.rp.toString();
                document.getElementById("lastBlueRP").innerHTML = data.score_breakdown.blue.rp.toString();
                
                var tempTeamNumber = 0; var tempStart = ""; var tempEnd = "";
                for (var i=0; i<3; i++) {
                    tempTeamNumber = data.alliances.red.team_keys[i].toString().replace("frc", "");
                    if (tempTeamNumber == getSetting("teamkey").toString().replace("frc", "")) {
                        tempStart = "<u><strong>"; tempEnd = "</strong></u>";
                    } else {
                        tempStart = ""; tempEnd = "";
                    }
                    document.getElementById("lastRed"+(i+1).toString()).innerHTML = tempStart + tempTeamNumber + tempEnd;
                }
                for (var i=0; i<3; i++) {
                    tempTeamNumber = data.alliances.blue.team_keys[i].toString().replace("frc", "");
                    if (tempTeamNumber == getSetting("teamkey").toString().replace("frc", "")) {
                        tempStart = "<u><strong>"; tempEnd = "</strong></u>";
                    } else {
                        tempStart = ""; tempEnd = "";
                    }
                    document.getElementById("lastBlue"+(i+1).toString()).innerHTML = tempStart + tempTeamNumber + tempEnd;
                }
                
                document.getElementById("lastMatchNumber").innerHTML = data.match_number.toString();
                
                if (data.winning_alliance == "red") {
                    $("#lastWinBlue").addClass("d-none");
                    $("#lastWinRed").removeClass("d-none");
                } else if (data.winning_alliance == "blue") {
                    $("#lastWinBlue").removeClass("d-none");
                    $("#lastWinRed").addClass("d-none");
                }
            }
        });
    }
}

function loadNextMatch(data) {
    var nextMatchKey = data.next_match_key;
    if (nextMatchKey != null) {
        $.ajax({
            type: "GET",
            url: tbaUrl("/match/"+nextMatchKey+"/simple"),
            dataType: "json",
            success: function(data) {
                var tempTeamNumber = 0; var tempStart = ""; var tempEnd = "";
                for (var i=0; i<3; i++) {
                    tempTeamNumber = data.alliances.red.team_keys[i].toString().replace("frc", "");
                    if (tempTeamNumber == getSetting("teamkey").toString().replace("frc", "")) {
                        tempStart = "<u><strong>"; tempEnd = "</strong></u>";
                    } else {
                        tempStart = ""; tempEnd = "";
                    }
                    document.getElementById("nextRed"+(i+1).toString()).innerHTML = tempStart + tempTeamNumber + tempEnd;
                }
                for (var i=0; i<3; i++) {
                    tempTeamNumber = data.alliances.blue.team_keys[i].toString().replace("frc", "");
                    if (tempTeamNumber == getSetting("teamkey").toString().replace("frc", "")) {
                        tempStart = "<u><strong>"; tempEnd = "</strong></u>";
                    } else {
                        tempStart = ""; tempEnd = "";
                    }
                    document.getElementById("nextBlue"+(i+1).toString()).innerHTML = tempStart + tempTeamNumber + tempEnd;
                }
                
                document.getElementById("nextMatchNumber").innerHTML = data.match_number.toString();
            }
        })
    }
}

window.onload = doOnLoad;
window.setInterval(doInterval, 5000);
