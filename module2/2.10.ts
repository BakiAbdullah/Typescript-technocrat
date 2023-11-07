{
  //** Mapped types */
  const arrOfNum: number[] = [1, 3, 6];

  const arrOfStr: string[] = ["1", "3", "6"];

  const arrOfString: string[] = arrOfNum.map((number) => number.toString());
  console.log(arrOfString);
  //
}

type AreaNumber = {
  height: number;
  width: number;
};

type Height = AreaNumber["width"]; // look up type

// type AreaString = {
//   height: string;
//   width: string;
// }

//** Mapped types */ 
type AreaString<T> = {
  [key in keyof T]: T[key]; //* type Height = AreaNumber["width"]; // look up type
};

const area1: AreaString<{
  height: string;
  width: number;
}> = {
  height: '100',
  width: 200
};
