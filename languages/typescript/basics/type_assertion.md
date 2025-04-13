# Type Assertion

in react tsx version, we can only use
```Typescript
value as type
```

but in other scenarios, we can use 
```Typescript
<Type>value
```

when Typescript is unsure which type is the variable of the union types, we can only access the **mutual** properties or functions

in this example, we can only access the ```.name``` property.
```Typescript
interface Cat{
    name: string;
    run(): void;
}
interface Fish{
    name: string;
    swim(): void;
}
function getName(animal: Cat | Fish){
    return animal.name
}
```

## Assert Any as a specific type
for future sustainability of code, we should always try to make the return type specific, not just **any**

if we have a function that returns any type, it is ideal to assert the returned value as a specific type upon calling it:

```Typescript
function getCacheData(key: string):any{
    return (window as any).cache[key];
}

interface ReturnedValue{
    name: string;
    run(): void;
}

const thing = getCachedData('input') as ReturnedValue;
thing.run();
```

### Rules To Remember
- parent class can be type-asserted as child class
- union type can be asserted as any one of the types
- any type can be asserted as **any**
- **any** can be asserted as any type
- to make ```A``` allowed to be asserted as ```B```, we only need ```A``` to contain ```B``` or ```B``` to contain ```A```

## Double Assertion
in the example below, if i used ```cat as Fish``` will definitely give an error because they are not compatible with each other

however, if we use double assertion, we can break the 5th rule stated above and assert **any type to another**

this is a terrible practice, try not to use it
```Typescript
interface Cat{
    run(): void;
}
interface Fish{
    swim(): void;
}
function testCat(cat: Cat){
    return (cat as any as Fish);
}
```