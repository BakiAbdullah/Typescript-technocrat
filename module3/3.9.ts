{
  //** Abstraction in OOP */
  // 1. interface 2. abstract class

  //! Idea >>>>>>>>>>>>
  interface Vehical1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //! real implementation >>>>>>>>>>>>>>>>
  class Car1 implements Vehical1 {
    startEngine(): void {
      console.log("Starting the car Engine!");
    }

    stopEngine(): void {
      console.log("Stoping the car Engine!");
    }
    move(): void {
      console.log("I am Moving the car!");
    }

    test() {
      console.log("I am just testing");
    }
  }

  // Creating instance of Car class
  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //*** abstract class ***/ >>>>>>>>>>>>>>>>>>>>>>>

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log('Starting the engine')
    }
    stopEngine(): void {
      console.log('Stoping the engine')
    }
    move(): void {
      console.log('Moving the Car!!')
    }
  }
  

  //
}
