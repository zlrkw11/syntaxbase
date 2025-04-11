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

// inheritance
class ApiError extends Error {
  code: number = 0;
}

class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === "number") {
    return true;
  }
  return false;
}
