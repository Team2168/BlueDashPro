var Inabled = true;

document.addEventListener('keydown', function(event) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (Inabled) {
    
    if (event.keyCode == 37 || event.keyCode == 188 || event.keyCode == 219) { // 37 is the Key Code for The left Key || 188 is the Key Code for < || 188 is the Key Code for { 

        if (page === "dashboard.html"){
        window.location.replace("credits.html");
        }
        else if (page === "lookahead.html"){
        window.location.replace("dashboard.html");
        }
        else if (page === "settings.html"){
        window.location.replace("lookahead.html");
        }
        else if (page === "credits.html"){
        window.location.replace("settings.html");
        }
    }
    else if (event.keyCode == 67){ // 67 is the Key Code for C
    window.location.replace("credits.html");
    }  
    else if (event.keyCode == 68){ // 68 is the Key Code for D
    window.location.replace("dashboard.html");
    }
    else if (event.keyCode == 76){ // 76 is the Key Code for L
    window.location.replace("lookahead.html");
    }
    else if (event.keyCode == 83){ // 83 is the Key Code for S
    window.location.replace("settings.html");
    } 
    else if (event.keyCode == 49){ // 49 is the Key Code for 1
    window.location.replace("dashboard.html");
    }
    else if (event.keyCode == 50){ // 50 is the Key Code for 2
    window.location.replace("lookahead.html");
    }
    else if (event.keyCode == 51){ // 51 is the Key Code for 3
    window.location.replace("settings.html");
    } 
    else if (event.keyCode == 52){ // 52 is the Key Code for 4
    window.location.replace("credits.html");
    }
    else if (event.keyCode == 39 || event.keyCode == 190 || event.keyCode == 221) { // 39 is the Key Code for The right Key || 190 is the Key Code for > || 221 is the Key Code for }
        
        if (page === "dashboard.html"){
        window.location.replace("lookahead.html");
        }
        else if (page === "lookahead.html"){
        window.location.replace("settings.html");
        }
        else if (page === "settings.html"){
        window.location.replace("credits.html");
        }
        else if (page === "credits.html"){
        window.location.replace("dashboard.html");
        }
    } 
}
    if (event.keyCode == 17){  // 17 is the Key Code for the Ctrl Key
    console.log("WHY ARE YOU LOOKING IN HERE");
    Inabled = !Inabled;
}

}, true);



