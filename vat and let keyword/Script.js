var x = 5;
{
 var x = 10;
 }
 console.log(x)//returns 10; because var is a variable that will not show the block scope but global scope
 
 
 let x = 10;
 {
   let x = 5;
   }
 console.log(x);//returns 10;block scope
 
 
 // var and let keyword in for loop 
 var i = 5;
 for(var i = 0;i<10;i++){
 console.log(i);//returns 0-9(10)
}

let k = 10;
for(let k = 0;k<9;k++){
console.log(k);//returns 10;
}
 

