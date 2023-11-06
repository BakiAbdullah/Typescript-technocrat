{
  // Interface - Generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<AppleWatch> = {
    name: "Shatil",
    computer: {
      brand: "Hp",
      model: "G3",
      releaseYear: 2016,
    },
    smartWatch: {
      brand: "apple",
      model: "3c52",
      display: "amoled",
    },
  };

  interface AppleSmartWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleSmartWatch, YamahaBike> = {
    name: "Mesbah",
    computer: {
      brand: "Apple",
      model: "Macbook air",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "apple Watch",
      model: "k99",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "150cc",
    },
  };

  //
}
