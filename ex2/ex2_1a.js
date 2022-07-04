//NAME: Or S. Naim
//ID: 315394957
//Instructions: To access my function, kindly add the following line in main:
//console.log(factorialCalc(#Desired_n))

var factorialArray = [1]

function factorialCalc(n) {
	// console.log(factorialArray.length)
  if (n == factorialArray.length) {
  	//console.log("Entered 1 with n =" + n)
  	let newElement = n * factorialArray[n - 1]
    // console.log(newElement)
    factorialArray.push(newElement)
    return(newElement)
  }
  
  else if(n < factorialArray.length) {
  	// console.log("Entered 2 with n =" + n)
  	// console.log(factorialArray[n])
    return(factorialArray[n])
  }
  
  else {
  	// console.log("Entered 3 with n =" + n)
  
    let newElement = n * factorialCalc(n - 1)
    // console.log(newElement)
    factorialArray.push(newElement)
    return newElement
  }
}


// console.log(factorialCalc(60))