/*
NAME: Or S. Naim
ID: 315394957

Instructions: This part works as follows:
1. Unlike my previous interpretation to the assignment, here, I return only ONE RESULT.
2. All arguments except the last one compose a single key, I send it if required to call f, along with all arguments.
3. Before that, I check if I already save the results in my memo database.
  
To access my function, kindly add the following line in main:
console.log(memoize(SET OF VARIABLES)), and make sure the first variable in the set, is the name of your function.

*/

var memo = {}
function memoize() {
	//console.log(typeof arguments)
	let nameOfFunc = arguments[0]
  let nameOfCache = ""
  let argu = [] // Array of arguments for callable function
	for (var i=1; i<arguments.length; i++){
  	//console.log(arguments[i]);
    argu.push(arguments[i])
    if(i < arguments.length - 1) { // Composing a unique key
    	nameOfCache += ","
      nameOfCache += arguments[i]
    }
  }
  console.log(nameOfCache)
  // console.log(arguments[arguments.length - 1])
  if(nameOfFunc in memo) {
  	// console.log("hit0")
  	if(nameOfCache in memo[nameOfFunc]) {
    	// console.log("Hey")
      if(memo[nameOfFunc][nameOfCache].length > arguments[arguments.length - 1]) {
      	// console.log("hit")
      	return memo[nameOfFunc][nameOfCache][arguments[arguments.length - 1]] // Function call saved. Fetching result from cache.
      } else { // Cache exists, but we haven't calculated the required, just yet.
      	// console.log("Here")
        let result = nameOfFunc(argu)
        memo[nameOfFunc][nameOfCache].push(result)
        return result
      }
    } else { // We're familliar with this function already, but we haven't made similar calculations.	
    	memo[nameOfFunc][nameOfCache] = []
      result = nameOfFunc(argu)
      memo[nameOfFunc][nameOfCache].push(result)
      return result
    }
  } else { //We're not familliar with the function nor with the calculation yet.
  	
    memo[nameOfFunc] = []
    memo[nameOfFunc][nameOfCache] = []
    result = nameOfFunc(argu)
    memo[nameOfFunc][nameOfCache].push(result)
    return result
  }
}

function f(n){
	return n[n.length - 1]
}


console.log(memoize(f,2,3,3))
//console.log(memo)
console.log(memoize(f,2,3,2))
//console.log(memo)
console.log(memoize(f,2,3,2))
console.log(memoize(f,2,3,2))