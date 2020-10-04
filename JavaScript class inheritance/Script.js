//class inheritance
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
// use extends keyword
class Model extends Car {
  constructor(brand, newbrand) {
    super(brand);
    this.model = newbrand;
  }
  show() {
    return this.present() + ', And  It is a ' + this.model;
  }
}

mycar = new Model(" Ford ", "Mustang");
console.log(mycar.show());// returns I have a Ford , And It is a Mustang
