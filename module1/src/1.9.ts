{
  // Type alias 

  // Declaring Type alias for reusing the same type as needed
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  }

  const student1: Student = {
    name: 'Baki',
    age: 39,
    gender: 'male',
    contactNo: '0198823333',
    address: 'Rajshahi'
  }

  const student2: Student = {
    name: 'Hablu',
    age: 13,
    gender: 'female',
    address: 'Khulna'
  }

  // String type alias
 type UserName = string
 type IsAdmin = boolean
 const userName: UserName = 'Baki Abdullah'
 const isAdmin: IsAdmin = false


 //** Function type alias */
 type Add = (num1: number, num2: number) => number
 const add: Add = (num1,num2)=> num1+num2

}