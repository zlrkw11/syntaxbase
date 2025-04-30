function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// type alias
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}

// call signatures
// takes in a parameter and return a certain type

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

// construct signatures
type SomeObject = {
  message: string;
};

type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
