Name: Or S. Naim
ID: 315394957

var toReturn = []
var ajaxUtils = require('./ex3_ajax_utils.js')
        var index = ["https://lemida.biu.ac.il/",
                    "https://ims.gov.il/",
                    "https://www.mizrahi-tefahot.co.il/",
                    "https://www.maariv.co.il/",
                    "https://www.wikipedia.org/"];
       
        for(let i = 0; i < index.length; i++) {
          let url = index[i]
          ajaxUtils.sendGetRequest(url, function (request) { //Recording information to request., Please refer to line 21 in ajax-utils.js
            if(request.responseText != "") {
              // console.log("Bingo")
              var data = request.responseText;  // Copying data from request to variable data.
              console.log('-->' + i + ' id: ' + data.substring(1,2000)); //Printing data content.
              //console.log(i)
              console.log("---------------------------\n")
            } else {
              toReturn.push(i)
            }
          });
        }

//loop(0)