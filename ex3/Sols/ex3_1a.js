Name: Or S. Naim
ID: 315394957

//Goal: As of right now, the following code call each website one after another. In other words,
// ims.gov.il for instance only being called, after lemida.biu finished. Our goal is to call all websites
// Simutansly.

var toReturn = []
document.addEventListener("DOMContentLoaded",
  function () {
    document.querySelector("button")
      .addEventListener("click", (e) => {
        cuFunction()
      });
  });

  function cuFunction() {
    var index = ["https://lemida.biu.ac.il/",
    "https://ims.gov.il/",
    "https://www.mizrahi-tefahot.co.il/",
    "https://www.maariv.co.il/",
    "https://www.wikipedia.org/"];

    for(let i = 0; i < index.length; i++) {
      let url = index[i]
      $ajaxUtils.sendGetRequest(url, function (request) { //Recording information to request., Please refer to line 21 in ajax-utils.js
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
  }
  

  /**
   function () {
        var index = ["https://lemida.biu.ac.il/",
                    "https://ims.gov.il/",
                    "https://www.mizrahi-tefahot.co.il/",
                    "https://www.maariv.co.il/",
                    "https://www.wikipedia.org/"];

        // Comment from here

        (function loop(i) {
            if (i>= index.length) {
                return;
            }
            var url = index[i]; // Here we are injecting to url one website from the array above.
            $ajaxUtils.sendGetRequest(url, function (request) { //Recording information to request., Please refer to line 21 in ajax-utils.js
              if(request.responseText != "") {
                // console.log("Bingo")
                var data = request.responseText;  // Copying data from request to variable data.
                console.log('-->' + i + ' id: ' + data.substring(1,2000)); //Printing data content.
                console.log("---------------------------\n")
              } else {
                toReturn.push(i)
              }
              loop(i + 1); //Moving to the next website.
            });

            //end of comment

            for(let i = 0; i < index.length; i++) {
              let url = index[i]
              $ajaxUtils.sendGetRequest(url, function (request) { //Recording information to request., Please refer to line 21 in ajax-utils.js
                if(request.responseText != "") {
                  // console.log("Bingo")
                  var data = request.responseText;  // Copying data from request to variable data.
                  //console.log('-->' + i + ' id: ' + data.substring(1,2000)); //Printing data content.
                  console.log(i)
                  console.log("---------------------------\n")
                } else {
                  toReturn.push(i)
                }
              });
            }
        })(0);
    */

//Idea : consider creating request variable to each website, and print them only after data recorded.