{
  // Learning TypeScript functions
// Normal functions and Arrow Functions

function add(num1: number,num2: number=10):number {
  return num1 + num2;
}

// console.log(add(2, 4) )

//* TypeScript in Arrow Functions | How to define types in arrow functions
const addArrow = (num1: number, num2: number):number => num1 + num2;


// Functions inside a Object is called Method //**object => functions => method */
const poorUser = {
  name: "Baki",
  balance: 0,
  addBalance(balance: number):string{
    return `My new balance is ${this.balance + balance}`
  }
}


const arr : number[]= [1,4,10];
const newArray:number[] = arr.map((elem:number):number => elem*elem)
}