{
  //** Generic Constraints(সীমাবদ্ধতা) with keyof operator in TS */

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually defined type
  type Owner2 = keyof Vehicle; // using keyof operator in TS

  const user = {
    name : 'John',
    age: 36,
    address: '123 Main Street',
  }

  const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];
  }

  const result1 = getPropertyValue(user, 'name')

  // user['age'] 36













  //** */
}
