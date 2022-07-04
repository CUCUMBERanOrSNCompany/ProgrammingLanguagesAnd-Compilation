//Name: Or S. Naim
//I.D: 315394957
//Change: I defined variable I out of constfuncs()


function constfuncs() {
  for(var i = 0; i < 10; i++)
    (function(i) {
      funcs[i] = function() { return (i);} }(i));
   return funcs
}

var funcs = []; 
funcs = constfuncs();

for(var i = 0; i < 10; i++){
  console.log(funcs[i] + ":", funcs[i]())
}

//Initialization:
// Constfuncs (Line 6) and var funcs array (13) are initialized from global scope. 
// line 14: We enter constfuncs().
//Var i is initialize in local scope.
// Line 7: We enter a For loop
// Line 8: We are entering the lambda, and create 10 closures.
// Lines 16-18 we print the results.