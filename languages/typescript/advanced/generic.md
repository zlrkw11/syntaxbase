# Generics

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