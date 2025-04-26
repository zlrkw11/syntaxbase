function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join("") + input;
  }
  return padding + input;
}

// in
interface Bird {
  fly: () => void;
  layEggs: () => void;
}

interface Fish {
  swim: () => void;
  layEggs: () => void;
}

function action(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  }
  if ("layEggs" in animal) {
    animal.layEggs();
  }
}

// instanceof
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// assignment
const variable1 = 1;

// type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet1: Fish | Bird = {
  swim: () => console.log("swimming"),
  layEggs: () => console.log("laying eggs"),
  fly: () => console.log("flying"),
};

const pet2: Fish | Bird =
  Math.random() > 0.5
    ? {
        swim: () => console.log("swimming"),
        layEggs: () => console.log("laying eggs"),
      }
    : {
        fly: () => console.log("flying"),
        layEggs: () => console.log("laying eggs"),
      };

if (isFish(pet2)) {
  pet2.swim();
} else {
  pet2.fly();
}
