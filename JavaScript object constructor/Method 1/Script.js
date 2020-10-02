function person1(first,last,age,eye){
this.firstName = first;
this.lastName = last;
this.age = age;
this.eyeColor = eye;
}
var myFather = new person1("Kamini","Ronjon",55,"blue");
console.log("My father is" + myFather.age + " . ");//returns Myfather is 55.
