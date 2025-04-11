interface Car {
  name: string;
  drive(): void;
}
interface Truck {
  name: string;
  store(): void;
}
function isTruck(vehicle: Car | Truck) {
  if (typeof (vehicle as Truck).store === "function") {
    return true;
  }
  return false;
}
