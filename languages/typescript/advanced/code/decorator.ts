class Vehicle {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  greet() {
    console.log(`This is a ${this.type}!`);
  }
}

const bmw = new Vehicle("car");
bmw.greet();
