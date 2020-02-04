document.addEventListener('keydown', function(event) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (event.keyCode == 37 || event.keyCode == 188) { // 37 is the Key Code for The left Key || 188 is the Key Code for <
      
       if (page === "index.html"){
        window.location.replace("settings.html");
       }
       else if (page === "lookahead.html"){
        window.location.replace("index.html");
       }
       else if (page === "settings.html"){
        window.location.replace("lookahead.html");
       }
    }
    else if (event.keyCode == 68){ // 68 is the Key Code for D
        window.location.replace("index.html");
    }
    else if (event.keyCode == 76){ // 76 is the Key Code for L
        window.location.replace("lookahead.html");
    }
    else if (event.keyCode == 83){ // 83 is the Key Code for S
        window.location.replace("settings.html");
    }   
    else if (event.keyCode == 49){ // 49 is the Key Code for 1
        window.location.replace("index.html");
    }
    else if (event.keyCode == 50){ // 50 is the Key Code for 2
        window.location.replace("lookahead.html");
    }
    else if (event.keyCode == 51){ // 51 is the Key Code for 3
        window.location.replace("settings.html");
    } 
    //else if (event.keyCode == 38) { // 38 is the Key Code for The up Key 
       
    //}
    else if (event.keyCode == 39 || event.keyCode == 190) { // 39 is the Key Code for The right Key || 190 is the Key Code for >
    
        if (page === "index.html"){
            window.location.replace("lookahead.html");
           }
           else if (page === "lookahead.html"){
            window.location.replace("settings.html");
           }
           else if (page === "settings.html"){
            window.location.replace("index.html");
           }
    

    
    }
    //else if (event.keyCode == 40) { // 40 is the Key Code for The down Key 
  
   //}

}, true);
