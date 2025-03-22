# Basic Syntax

**source**\
[typescript docs](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

### Static type-checking
```typescript
const message = "hello";
message();
```

### Non-exception failures
```typescript
const user = {
  name: "Daniel",
  age: 26,
};
user.location;
```
we will get undefined for the above code since the property - location does not exist.

this includes
> uncalled functions\
> typos\
> basic logic errors

### Explicit Types
tell typescript what ```person``` or ```date``` are\
we want to make ```person``` a string and ```date``` a Date object.

```typescript
function greet(person: string, date: Date){
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

```typescript
greet(person: string, date: Date)
```
basically, this function takes a ```person``` of type ```string``` and a ```date``` of type ```Date```
