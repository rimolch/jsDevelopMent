var person = {
fullName:function(){
return this.firstName + "" + this.lastName;
 }
}
var person1 = {
firstName : " John ",
lastName : " Doe "
}
var person2 = {
firstName : " Mercy ",
lastName : " Doe "
}
console.log(person.fullName.call(person2));// returns Mercy Doe
