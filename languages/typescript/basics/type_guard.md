# Type Guard

type guard allows you to use smaller-scaled object types

## typeof

```typescript
function doSome(x:number | string){
    if(typeof x === "string"){
        console.log("x is a string");
    }
}
```

## instanceof
example between **class** and **instanceof**:

### side notes on class
- instanceof is responsible for checking if an object is of a type of a specific **class**
- it only works with instances initiated with **new class_name()**

example for using ```instanceof```:
```typescript
class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  }
  if (arg instanceof Bar) {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());
```

Typescript also works with **else**. When **if** is used to narrow down a type, it will automatically derive the other types.

## in
```typescript
interface A{
    x: number
}

interface B{
    y: string
}

function doStuff(q: A | B){
    if ('x' in q){
        // q: A
    }else{
        // q: B
    }
}
```
When an interface or type that contains 'x', it will be A.

## Literal Type Guard

This is used for literal types that are used in **union types**. We can check to see if they are different from each other.

```typescript
type Foo = {
  kind: 'foo'; // literal type
  foo: number;
};

type Bar = {
  kind: 'bar'; // literal type
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    // Must be bar
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
```

### side notes on literal types and string type
Literal type can only be one specific string where a string type can be any string.
Therefore literal types are used more for:
- type differentiation
- union types
- enumerate

Whereas string type is used mostly for input from user.