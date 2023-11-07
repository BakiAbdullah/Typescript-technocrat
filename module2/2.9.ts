{
  //** Conditional Type with generic and constraints */
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // Conditional Type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // Conditional Type

  type Sheike = {
    bike: string;
    car: string;
    ship: string;
    jetPlane: string;
  };

  // car / bike ache kina / tractor ache kina
  type CheckVehicle<T> = T extends keyof Sheike ? true : false;
  type HasBike = CheckVehicle<'car'>
  type HasTractor = CheckVehicle<'tractor'>
  type HasJetPlane = CheckVehicle<'jetPlane'>

}
