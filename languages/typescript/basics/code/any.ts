// cannot assign
let myName: string = "ray";

// can change
let myName2: any = "ray";

// can access any properties even they don't exist
let anyThing: any = "value";
console.log(anyThing.name);
console.log(anyThing.name.firstName);

let anyThing2: any = "value";
anyThing2.setName("ray");
anyThing2.setName("ray").sayHello();
anyThing2.setName("ray").setFirstName("Cat");
