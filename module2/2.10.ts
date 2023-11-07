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
}
// type AreaString = {
//   height: string;
//   width: string;
// }

