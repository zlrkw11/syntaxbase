interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  type: VehicleType;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacity: number;
  range: number;
}

interface SportsCar extends Vehicle {
  horsepower: number;
  torque: number;
  topSpeed: number;
  acceleration: number;
  driveType: "FWD" | "RWD" | "AWD";
  aerodynamicDesign: boolean;
  sportMode: boolean;
  suspensionType: "sport" | "standard" | "adaptive";
  weight: number;
  performanceBadge?: string;
}

enum VehicleType {
  Sedan = "Sedan",
  SUV = "SUV",
  Hatchback = "Hatchback",
  Coupe = "Coupe",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
}

type SpecificVehicle = Vehicle | ElectricVehicle;

function filterVehiclesByBrand<T extends Vehicle>(
  vehicles: T[],
  brand: string
): T[] {
  return vehicles.filter((v) => v.make === brand.toLowerCase());
}
