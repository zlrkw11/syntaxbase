function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, "x"); // ['x', 'x', 'x']
// multiple generics
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// restriction
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// generic interface
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function (
  source: string,
  subString: string
): boolean {
  return source.search(subString) !== -1;
};

interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray2: CreateArrayFunc;
createArray2 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

// bundling with a type
interface CreateArrayFuncB<T> {
  <T>(length: number, value: T): Array<T>;
}
let createArray3: CreateArrayFuncB<any>;
createArray3 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
