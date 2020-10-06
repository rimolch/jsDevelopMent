// Method 1
function findMax(){
var i;
var max = - Infinity;
for(i = 0; i<arguments.length; i++){
if(arguments [i]>max){
max = arguments[i];
 }
}
return max ;
}

console.log(findMax(4,5,6));// returns 6


// Method 2
function findMax(){
var i ;
var max = 5;// you can use 1,2,3,7,8 .....<arguments [i]
for(i = 0; i<arguments.length; i++){
if(arguments [i]>max){
max = arguments[i];
 }
}
return max ;
}

console.log(findMax(10,11,12));// returns 12
