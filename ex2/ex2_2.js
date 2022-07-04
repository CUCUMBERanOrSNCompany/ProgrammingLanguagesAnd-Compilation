//NAME: Or S. Naim
//ID: 315394957
// Reference to: https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter
//Instructions: To access my function, kindly add the following line in main:
//console.log(memoize(nameOfFunction, desiredN))
//When creating your f function, in an event a recurssion call is required, make sure to call memoize and not the function itself.

memo = []

function memoize(f, argument) {
	nameOfFunc = f
		if(nameOfFunc in memo) {
    	if(memo[nameOfFunc].length > argument) {
      	return memo[nameOfFunc][argument]
      } else {
      	let result = nameOfFunc(argument)
      	memo[nameOfFunc].push(result)
      	return result
      }
    } else {
    		memo[nameOfFunc] = []
      	let result = nameOfFunc(argument)
      	memo[nameOfFunc].push(result)
      	return result
    }
}

function f(n) {
    if(n < 2) {
    	return n
    }
    newN = n - 1
    return memoize(f, n - 2) + memoize(f, n - 1)
}

result = memoize(f, 6660)
console.log(result)
result = memoize(f, 60)
console.log(result)