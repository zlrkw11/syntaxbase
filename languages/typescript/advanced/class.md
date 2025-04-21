# Class

Variables declared with **private** decorator is not accessible from outside of the class that the variable is declared.
Variables declared with **protected** can be accessed in child classes
If we did not declare any class or properties with any decorator, the default will be **public**

The name variable is not accessible here since it is declared as private:
```typescript
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
```

### Abstract 
Abstract classes cannot be instantiated.

```typescript
abstract class AbstractAnimal {
  public name;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): void;
}
```
