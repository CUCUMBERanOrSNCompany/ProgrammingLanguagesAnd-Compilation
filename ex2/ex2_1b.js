//NAME: Or S. Naim
//ID: 315394957
//Instructions: To access my function, kindly add the following line in main:
//console.log(fiboCalc(#Desired_n))

var fiboArray = [0, 1, 1]

function fiboCalc(n) {
	if(n < fiboArray.length){
  	//console.log("Entered 1 with n = " + n + " and array length = " + fiboArray.length)
  	return(fiboArray[n])
  }
  
	else if(n == fiboArray.length) {
  	let newElement = fiboArray[n - 1] + fiboArray[n - 2]
    fiboArray.push(newElement)
    return(newElement)
  }
  
  else {
  	let newElement = fiboCalc(n - 2) + fiboCalc(n - 1)
    fiboArray.push(newElement)
    return(newElement)
  }
}

//console.log(fiboCalc(2))
//console.log(fiboCalc(260))
