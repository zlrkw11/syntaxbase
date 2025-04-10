// type + []
let fibonacci: number[] = [1, 1, 2, 3, 5];

// Array<type>
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// interface
interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

// any usage
let list: any[] = ["ray", 1, true, { age: 21 }];

// array-like object
function sum() {
  let args: { [index: number]: number; length: number; callee: Function } =
    arguments;
}
