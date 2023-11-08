{
  //** Statics in OOP */

  class Counter {
    static count: number = 0; // by mentioning static it will be refered to single memory

    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 => different memory usage

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1 => different memory usage

  //
}
