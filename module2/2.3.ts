{
  //** generic type in TS */
  type GenericArray<T> = Array<T>;

  // const rollNumbers : number[] = [3, 4, 5];
  const rollNumbers: GenericArray<number> = [3, 4, 5];

  // const mentors : string[] = ['X', 'Y', 'Z'];
  const mentors: GenericArray<string> = ["X", "Y", "Z"];

  // const boolArray : boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // Using dynamic generic types in a Array of Objects
  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Baki", age: 28 },
    { name: "kafi", age: 22 },
  ];

  const add = (x: number, y: number) => x + y;

  //** Generic Tuple in TS */
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr X", "Mrs Y"];
  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Baki", email: "ddd@gmail.com" },
  ];
}
