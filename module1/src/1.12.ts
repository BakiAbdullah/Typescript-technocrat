{
  //** Nullable types
  const searchName = (value:string | null) => {
    if (value){
      console.log('Searching')
    } else {
      console.log('There is nothing to search')
    }
  }
  searchName(null);

  //** Unknown types
  const getSpeedInMeterPerSecond = (value:unknown)=> {
    if (typeof value === 'number') {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`)
    }

   else if (typeof value === 'string'){
      const [result, unit] = value.split(' ')
       const convertedSpeed = (parseFloat(value) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`)
    } else {
      console.log('Wrong input')
    }
  }
  getSpeedInMeterPerSecond(`1000 kmh^-1`);


   //** Never types in TS
   const throwError = (msg:string):never => {
    throw new Error(msg)
   }

   throwError('We got an error!')
}