Name: Or S. Naim
ID: 315394957

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
        var index = ["https://lemida.biu.ac.il/",
                     "https://ims.gov.il/",
                     "https://www.mizrahi-tefahot.co.il/",
                     "https://www.maariv.co.il/",
                     "https://www.wikipedia.org/"];
    //console.log(index.length)
    for(let i = 0; i < index.length; i++) {
        //console.log(index.length)
        let request = new XMLHttpRequest();
        let url = index[i]
        //console.log(url)
        request.open("GET", url, true);
        request.onload = function(e){
            if(request.readyState === 4 && request.status === 200) {
                var data = request.responseText;
                console.log('-->' + i + ' id: ' + data.substring(1,1500));
                console.log("---------------------------\n")
            } else {
                setTimeout(function(){ 
                    if(request.readyState === 4 && request.status === 200) {
                        var data = request.responseText;
                        console.log('-->' + i + ' id: ' + data.substring(1,1500));  // Printing the results using data.
                        console.log("---------------------------\n")
                    }
                }, 100);
            }
        };
        //request.onreadystatechange = function() {
            
        request.send();
    }
    
        