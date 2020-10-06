// method 1
function makeMultiply(a,b){
  return a * b ;
  }
var show = makeMultiply(5,6);
console.log(show);// returns 30


// method 2
var x = function(a,b){
  return a * b ;
  }
console.log(x(6,7));//returns 42


// method 3
var myFunction = new Function("v","t","return s = v * t ");
console.log(myFunction(300,8));// returns 2400

// method 4 
var myFunction = function(a,b){
  return a * b;
  }
console.log(myFunction (5,10));//returns 50
