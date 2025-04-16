# Generics
```Typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
The code will derive the type used to be ```string``` or any type we call it with.


```<T>``` is added after the function name which ```T``` means any input type. 

- ```value: T``` means the **value** received is of type **T**
- ```Array<T>``` means the function returns an array of type **T**

> Why are we using Generics

```Typescript
function createStringArray(length: number, value: string): string[] { ... }
function createNumberArray(length: number, value: number): number[] { ... }
```

Code like this is unflexible and redundant. By using Generic type, the code can be simplified to something reusable:

```Typescript
function createArray<T>(length:number, value: T): Array<T> {...}
```
- type safe
- reusable
- automatic derivation

## Generic Interface

### Flexible approach
```Typescript
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;

createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
```
- generic type <T> is defined inside of the signature but not the interface itself
- everytime ```CreateArrayFunc``` is called, it can assign a different type as <T>
- generic type works within the scope of the function 

```Typescript
createArray(3, 'x')
createArray(3, 0)
```
A different type can be used for every call, flexible.

### Strict Approach
```Typescript
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;

createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
```
- generic type <T> is defined strictly on the **interface** itself
- so ```CreateArrayFunc<T>``` is an interface with a **fixed type** as param
- ```let createArray: CreateArrayFunc<any>``` will make **T** fixed to type **any** 