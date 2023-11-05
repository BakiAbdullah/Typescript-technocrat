{
  // Interface

  type User1 = {
    name: string;
    age: number;
  }

   interface User2 {
    name: string;
    age: number;
  }

  // Type intersection with type alias
  type UserWithRole1 = User1 & {role: string}

  // Type intersection with Interface 
  interface UserWithRole2 extends User2 {
    role: string;
  }

   const user1: UserWithRole2 = {
    name: 'John',
    age: 36,
    role: 'admin'
  }

  //** js > object, array >  */
   type Roll1 = number[];

   interface Roll2 {
    [index:number]: number;
   }
 
   const rollNumber1: Roll2 = [1,2,3]

   type Add1 = (num1:number, num2:number)=> number
   interface Add2 {
    (num1:number, num2:number) : number
   }

   const add: Add2 =(num1, num2)=> num1 + num2
 


  //** type vs interface */
}