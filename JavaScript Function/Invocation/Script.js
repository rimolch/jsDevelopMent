function myFunction (arg1,srg2){
this.firstName = arg1;
this.lastName = arg2;
this.fullName = function(){
return this.firstName + "" + this.lastName ;
 };
}
var show = new myFunction (" John ", " Doe ");
console.log(show.fullName());//returns John Doe
