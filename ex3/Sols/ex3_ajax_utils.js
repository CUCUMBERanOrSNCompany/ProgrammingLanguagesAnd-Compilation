//Name: Or S. Naim
//ID: 315394957

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
var ajaxUtils = {};

// Returns an HTTP request object
function getRequestObject() {
    return new XMLHttpRequest()
}

// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
function(requestUrl, responseHandler) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { 
      handleResponse(request, responseHandler); 
    };
  request.open("GET", requestUrl, true);
  request.send(null); // for POST only
};

// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request, responseHandler) {
    if ((request.readyState == 4) && (request.status == 200)) {
        responseHandler(request);
    }
}


module.exports = ajaxUtils
    
// readyState  Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready