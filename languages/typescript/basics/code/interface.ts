interface Vehicle2 {
  readonly id: number;
  year: number;
  age?: number;
  price?: number;
  [n: string]: any;
}

// myCar object must have the exact same properties as Car interface
// the properties that are optional are declared with ?
let myCar1: Vehicle2 = {
  id: 11,
  year: 2018,
  color: "red",
};

// note: the index signature means that all the properties need to have its declared type (in this case, any)
