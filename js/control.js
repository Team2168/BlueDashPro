document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page === "index.html") {
            window.location.replace("settings.html");
        }
        else {
            window.location.replace("index.html");
        }
    }
    else if(event.keyCode == 39) {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if (page === "index.html") {
            window.location.replace("settings.html");
        }
        else {
            window.location.replace("index.html");
        }
    }

});

var test = document.getElementById("rank_col");
test.title = "";