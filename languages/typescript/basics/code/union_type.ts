let myFavouriteNumber: string | number;

// the variable can choose a type from all the types declared
myFavouriteNumber = "one";
myFavouriteNumber = 1;

function getString(something: string | number): string {
  return something.toString();
}
