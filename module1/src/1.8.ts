//**Rest operator in Typescript */

{
  const user = {
  id: 345,
  name: {
      firstName: "Md",
      middleName: "Sakib",
      lastName: "khan",
   },
   contactNo: "01952334338",
   address: 'Nepal'
}; 

const { contactNo, name: {middleName} } = user

// Array destructuring

const myFriends = ['mike', 'joe', 'ross', 'rachel', 'jon']

const [a,b,bestFriend, ...rest] = myFriends;

}