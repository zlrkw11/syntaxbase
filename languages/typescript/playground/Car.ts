interface Vehicle {
  readonly id: number;
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

function isElectricVehicle(vehicle: Vehicle): vehicle is ElectricVehicle {
  return (vehicle as ElectricVehicle).batteryCapacity !== undefined;
}

const vehicles: Vehicle[] = [
  {
    make: "toyota",
    model: "corolla",
    year: 2020,
    type: VehicleType.Sedan,
    id: 0,
  },
  {
    make: "tesla",
    model: "model 3",
    year: 2022,
    type: VehicleType.Sedan,
    id: 0,
  },
  {
    make: "honda",
    model: "civic",
    year: 2019,
    type: VehicleType.Hatchback,
    id: 0,
  },
];

const electricVehicles: ElectricVehicle[] = [
  {
    make: "tesla",
    model: "model s",
    year: 2021,
    type: VehicleType.Sedan,
    batteryCapacity: 100,
    range: 600,
    id: 0,
  },
  {
    make: "nissan",
    model: "leaf",
    year: 2020,
    type: VehicleType.Hatchback,
    batteryCapacity: 40,
    range: 270,
    id: 0,
  },
];

const sportsCars: SportsCar[] = [
  {
    make: "porsche",
    model: "911",
    year: 2022,
    type: VehicleType.Coupe,
    horsepower: 450,
    torque: 530,
    topSpeed: 310,
    acceleration: 3.5,
    driveType: "RWD",
    aerodynamicDesign: true,
    sportMode: true,
    suspensionType: "sport",
    weight: 1500,
    performanceBadge: "Turbo S",
    id: 0,
  },
];

const teslaCars = filterVehiclesByBrand(vehicles, "Tesla");
console.log("Tesla Cars:", teslaCars);
