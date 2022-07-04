Name: Or S. Naim
ID: 315394957

// Helpful article to solve this: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
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
        
        let waitingList = []
        for(let i = 0; i < index.length; i++) {
            //console.log(i)
            let request = new XMLHttpRequest(); //By leaving it with var, I created a single closure problem, and only the final website injected.
            let url = index[i] //By leaving it with var, I created a single closure problem, and only the final website injected.
            request.open("GET", url, true)
            //console.log(url)
            request.onload = function(e) { //onload, helps me achieve async behavior.
                if(request.readyState === 4 && request.status === 200) {
                    var data = request.responseText; // Copying response from GET request to the variable data.
                    console.log('-->' + i + ' id: ' + data.substring(1,1500));  // Printing the results using data.
                    console.log("---------------------------\n")
                    //console.log(i)
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
            request.send(null); 
        }
    }