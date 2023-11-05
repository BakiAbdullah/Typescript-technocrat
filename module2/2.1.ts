{
  //** Type assertions */ 
  let anything : any;

  anything = 'Level 2';
  anything = 213;
  (anything as number)


  const kgToGm = (value: string | number) : string | number | undefined => {
    if (typeof value === "string"){
      const convertedValue = parseFloat(value)*1000
      return `The converted value is :${convertedValue}`;
    }

    if(typeof value === "number"){
      return value*1000;
    }
  }
  
  const result1 = kgToGm(5) as number
  const result2 = kgToGm('50') as string


  // Type assertions in try catch block
  type CustomeError = {
    message: string
  }

  try {
    
  } catch (error) {
    console.log((error as CustomeError).message)
  }

  //** Type narrowing */ 
}