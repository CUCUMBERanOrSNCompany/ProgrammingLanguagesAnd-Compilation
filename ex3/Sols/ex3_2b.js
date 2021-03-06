Name: Or S. Naim
ID: 315394957

var request // Global variable in which we initialize XMLHttpRequest on each iteration.
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
        var index = ["https://lemida.biu.ac.il/",
                     "https://ims.gov.il/",
                     "https://www.mizrahi-tefahot.co.il/",
                     "https://www.maariv.co.il/",
                     "https://www.wikipedia.org/"];           
        
        (function loop(i) {
            request = new XMLHttpRequest(); //Reconstructing request global variable. 
            //could write: var request = new XMLHttpRequest(). 
            //But choose to write it this way for consistancy purposes.
            if (i>= index.length) {
                return;
            }
            var url = index[i];
            request.open("GET", url, true);
            request.onreadystatechange = function() {
                if(request.readyState === 4 && request.status === 200) {
                    var data = request.responseText;
                    console.log('-->' + i + ' id: ' + data.substring(1,1500));
                    console.log("---------------------------\n")
                    loop(i + 1);
                }
            }
            request.send(); 
        })(0);