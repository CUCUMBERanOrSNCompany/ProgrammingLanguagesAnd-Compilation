//NAME: Or S. Naim
//ID: 315394957
//Instructions: To access my function, kindly add the following line in main:
//console.log(fibonacci(#Desired_n)) OR console.log(factorial(#Desired_n))

//part 3.1
//Courtsy of: https://www.sitepoint.com/implementing-memoization-in-javascript/#:~:text=Memoization%20Basics&text=Because%20JavaScript%20objects%20behave%20like,without%20executing%20the%20entire%20function

var fibonacci = (function() {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n == 0 || n == 1)
        value = n;
      else
        value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

console.log(fibonacci(60))

// END OF PART 3.1

//PART 3.2
//Heavily inspired by 3.1.

var factorial = (function() {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
    	//console.log("Pulled from cache.")
      value = memo[n];
    } else {
      if (n == 0 || n == 1)
        value = 1;
      else
        value = f(n - 1) * n;

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

//console.log(factorial(10))
//console.log(factorial(9))
// END OF PART 3.2