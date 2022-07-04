/*
NAME: Or S. Naim
ID: 315394957

Instructions: This part works as follows:
1. The customer calls memoize with the set of variables of his choice.
2. Memoize scans the arguments and compose a key until an integer argument was given.
3. The composed key and the given integer are sent to the extension function manInTheMiddle
4. manInTheMiddle checks if the key is in the memoize database, and if the requested calculation recorded.
5. If so, the solution is handed right away, otherwise, both key and integer are sent to f.
6. After this process, Memoize try to build new sets of keys and values to calculate until all arguments exhausted.
7. Finally, Memoize returns an array of all solutions (Due to the nature of which any set of arguments can be 
provided, the size of the output array can be larger than 1, representing the number of calculations 
requested by the customer).
  
To access my function, kindly add the following line in main:
console.log(memoize(SET OF VARIABLES))

*/

var memo = {}
function memoize() {
	let results = []
	let nameOfCache = ""
	for (var i=0; i<arguments.length; i++){
  	//console.log(arguments[i]);
    if (Number.isInteger(arguments[i])) { //Looking at a value
    	if (nameOfCache == "") { //No key provided.
      	results.push(manInTheMiddle("NaN", arguments[i]))
      } else { //Using the key provided
      	results.push(manInTheMiddle(nameOfCache, arguments[i]))
        nameOfCache = "" //Resetting the key
      }
    } else { // The argument we're looking at is a key.
    	if(nameOfCache == ""){ //First part of the key
      	nameOfCache += arguments[i]
      } else { //Multiple keys provided. Merging them to one.
      	nameOfCache += ","
        nameOfCache += arguments[i]
      }
    }
  }
  
  if (nameOfCache != "") { // No value provided.
  	results.push(manInTheMiddle(nameOfCache, 0)) //Considering the value as 0.
  }
  
  return results //Returning the results.
}

function manInTheMiddle(nameOfCache, n) {
	//console.log(nameOfCache + " " + n)
  let counter = 0
  	if(nameOfCache in memo) {
    	//console.log(nameOfCache + " Found! " + memo[nameOfCache].length)
      //console.log(nameOfCache + " array is: " + memo[nameOfCache])
      if(memo[nameOfCache].length > n) {
      	return(memo[nameOfCache][n])
      } else {
      	return f(nameOfCache, n)
      }
      //memo[nameOfCache].push(n)
    		
    } else {
    	//console.log(nameOfCache + " not found.")
      memo[nameOfCache] = []
      return f(nameOfCache, n)
      //memo[nameOfCache].push(n)
    }
  }

/*  
  function f(nameOfCache, n) { //Examplary f function
  
  	if(n == 0 || n == 1) {
    	//console.log(nameOfCache + " " + n + " " + "1")
      if(memo[nameOfCache].length < 2) {
      	memo[nameOfCache] = [1, 1]
      }
    	return 1
    }

  	if (n == memo[nameOfCache].length) {
  		let newElement = n * memo[nameOfCache][n - 1]
    	memo[nameOfCache].push(newElement)
      //console.log(nameOfCache + " " + n + " " + newElement)
    	return(newElement)
  	}
  
  	else if(n < memo[nameOfCache].length) {
  	// console.log("Entered 2 with n =" + n)
  	// console.log(factorialArray[n])
    	//console.log(nameOfCache + " " + n + " " + memo[nameOfCache][n])
    	return(memo[nameOfCache][n])
  	}
  
  	else {
  	// console.log("Entered 3 with n =" + n)
  
    	let newElement = n * f(nameOfCache ,n - 1)
    // console.log(newElement)
    	//console.log(nameOfCache + " " + n + " " + newElement)
    	memo[nameOfCache].push(newElement)
    	return newElement
  	}
}

*/


//console.log(memoize("a", 1, "b", 2, 3, "c", "d", 0, "b", 0 , 0, "b", 3, //"b", 10, 20))
