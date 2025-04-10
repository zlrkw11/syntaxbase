# Function Type

```Typescript
let typedSum2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

This code is essentially saying:
- define a function ```typedSum2```
- declare its type using ```(x:number, y:number)=>number```, meaning this function will take in 2 numbers and return 1 number
- implementation by using the function ```function (
  x: number,
  y: number
): number {
  return x + y;
}``` 

However, we should use a simplified version:
```Typescript
let typed2Sum = (x:number, y:number):number => {
    return x + y;
}
```

