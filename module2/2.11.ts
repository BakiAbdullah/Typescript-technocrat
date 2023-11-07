{
  //** Utility types in TypeScript */

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };
  //! pick utility type
  type NameAge = Pick<Person, "name" | "age">;

  //! Omit utility type
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required type
  type PersonRequired = Required<Person>;

  // Partial type
  type PersonPartial = Partial<Person>;

  // Read only type
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Mr. XY",
    age: 200,
    contactNo: 3444,
  };

  //! person1.name = "Mr.Y"; //Cannot assign to 'name' because it is a read-only property.

  // Record type
  // type MyObj = {
  //   a : string,
  //   b: string
  // }

  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {}; //*** important

  const obj1: MyObj = {
    a: "a",
    b: "b",
    c: "cc",
  };

  //
}
