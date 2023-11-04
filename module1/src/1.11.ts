{
  // Ternary Operator || Optional Chaining || nullish coalescing operator

  const age: number = 19;

  if(age >= 18) {
    console.log('adult')
  } else {
    console.log('not adult')
  }

  const isAdult = age >= 18 ? "adult" : "notAdult";
  // console.log({isAdult});

  //** nullish coalescing operator (Null and undefined er opor kono logic dite chaile use kra jay) */ 

  const isAuthenticated = '';

  const result1 = isAuthenticated ?? 'Guest'
  const result2 = isAuthenticated ? isAuthenticated : 'Guest'
  console.log({result1}, {result2})
  

  //** Optional Chaining */
  type User = {
    name:string;
    address: {
      city:string;
      road: string;
      presentAddress: string;
      parmanentAddress?: string;

    }
  }

  const user: User = {
     name: 'Baki',
     address: {
        city: 'Rajshahi',
        road: 'Awe 123',
        presentAddress: 'Rajshahi',
    }
  }

  const parmanentAddress = user?.address?.parmanentAddress ?? 'No Permanent Address'
  console.log({parmanentAddress})
}