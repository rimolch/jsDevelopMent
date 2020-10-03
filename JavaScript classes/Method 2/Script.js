class Car {
constructor(brand){
this.carname = brand;
}
present(x){
return x + ", I have a " + this.carname;
}
}
mycar = new Car(" Saab ");
console.log(mycar.present(" Hello "));//returns Hello,I have a Saab
