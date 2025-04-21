// typescript class
class Animal {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
}

let a = new Animal("dog");
console.log(a.name);
a.name = "cat";
console.log(a.name);

// abstract class
abstract class AbstractAnimal {
  public name;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): void;
}

// Abstract classes cannot be instantiated directly
// let car1 = new Car("BMW");

// to use abstract class, we need to extend it
class Cat extends AbstractAnimal {
  public sayHi() {
    console.log("Meow!");
  }
}

let cat = new Cat("Jasper");
