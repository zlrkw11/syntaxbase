# Primitive Types
**source**\
[github repo for ts tutorial](https://ts.xcatliu.com/basics/primitive-data-types.html)

### Boolean
```typescript
let isDone: boolean = false;
```
note: using ```Boolean()``` function will return a boolean object but not a value!

```typescript
let createdByNewBoolean: boolean = new Boolean(1);
```

### Number
```typescript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

```0b1010``` and ```0o744``` are binary and octal expressions in ES6. They will be converted into a decimal.

### String
```typescript
const myName = 'Tom';
```
where ```${expr}``` are used to embed expressions in a string opened and closed with `

### Void
There is no void value in javascript. But we can use ```void``` to express for a function that does not return any value

```typescript
function alertName(): void{
  alert('My name is Ray');
}
```

### Null and Undefined
we use ```null``` and ```undefined```
