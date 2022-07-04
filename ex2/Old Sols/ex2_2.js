//NAME: Or S. Naim
//ID: 315394957
//Instructions: To access my function, kindly add the following line in main:
//console.log(memoize(#Desired_n))

memo = []

function memoize(n){
	// console.log("Entered: " + n + " " + memo.length)
  if(n < memo.length) {
  	console.log("Hit!")
    return memo[n]
  } else {
  	return f(n)
    // I am expecting any given f function to add elements to memo array -
    // This in order to DECREASE responsibility of this function.
  }
}

// EXAMPLE TO A FUNCTION (Requires to add the three first elements given in 1.b)

function f(n) {
	if(n < memo.length){
  	return(memo[n])
  }
  
	else if(n == memo.length){
  	let newElement = memo[n - 1] + memo[n - 2]
    memo.push(newElement)
    return(newElement)
  }
  
  else {
  	let newElement = f(n - 2) + f(n - 1)
    memo.push(newElement)
    return(newElement)
  }
}

// console.log(memoize(0))
//console.log(memoize(60))

