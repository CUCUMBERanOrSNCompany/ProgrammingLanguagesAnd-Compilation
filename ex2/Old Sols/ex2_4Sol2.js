/*
NAME: Or S. Naim
ID: 315394957

Instructions: This part works as follows:
1. Unlike my previous interpretation to the assignment, here, I return only ONE RESULT.
2. All arguments except the last one compose a single key, I send it if required to call f, along with all arguments.
3. Before that, I check if I already save the results in my memo database.
  
To access my function, kindly add the following line in main:
console.log(memoize(SET OF VARIABLES))

*/

var memo = {}
function memoize() {
	console.log(arguments)
	let nameOfCache = ""
  let argu = []
	for (var i=0; i<arguments.length; i++){
  	//console.log(arguments[i]);
    argu.push(arguments[i])
    if(i < arguments.length - 1) {
    	nameOfCache += ","
      nameOfCache += arguments[i]
    }
  }
  if (nameOfCache in memo) {
  	if(memo[nameOfCache].length > n) {
    	return(memo[nameOfCache][n])
    } else {
    	return f(nameOfCache, argu)
    }
  } else {
  	memo[nameOfCache] = []
   	return f(nameOfCache, argu) 
  } 
  
}
/*
	function f(keyName, argu){
	console.log(keyName)
 for (var i = 0 ; i < argu.length; i++){
 	console.log(argu[i])
 }
}
*/


//console.log(memoize(1,2,3,4))
