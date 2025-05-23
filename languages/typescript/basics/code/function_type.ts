// function declaration
function sum1(x, y) {
  return x + y;
}

// function expression
let sum2 = function (x, y) {
  return x + y;
};

// with types
function typedSum1(x: number, y: number): number {
  return x + y;
}

let typedSum2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

let typedSum2_2 = (x: number, y: number): number => {
  return x + y;
};

const typedSum3 = (x: number, y: number): number => {
  return x + y;
};

// interface for functio type
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
