{
  //** instanceof guard */

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  // ** Dog instance
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am Barking");
    }
  }
  // ** Cat instance
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawing");
    }
  }

  // To handle it in smart wat we can use functions

  const isDog = (animal : Animal): animal is Dog => {
    return animal instanceof Dog
  }
  const isCat = (animal : Animal): animal is Cat => {
    return animal instanceof Cat
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } 
    else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Mr. Dog", "Dog");
  const cat = new Cat("Mr. Cat", "Cat");

  getAnimal(dog)
  //
}
