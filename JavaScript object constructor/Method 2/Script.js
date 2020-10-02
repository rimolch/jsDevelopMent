function person2(first,last,age,eye){
this.firstName = first;
this.lastName = last;
this.age = age;
this.eyeColor = eye;
this.name = function(){
return this.firstName + " " + this.lastName ;
};
}
var myFather = new person2("Kamini","Ronjon",55,"blue");
console.log(" My father name is " + myFather.name());//returns My father name is Kamini Ronjon
