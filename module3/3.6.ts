{
  {
    //** getter and setter in OOP */
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;

      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }

      //*** functions in OOP using setter ***/
      set addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }

      // public addDeposit(amount: number) {
      //   this._balance = this._balance + amount;
      // }

      //*** functions in OOP using getter ***/
      public get balance() {
        return this._balance;
      }

      // public getBalance() {
      //   return this._balance;
      // }
    }

    const myBankAccount = new BankAccount(1234, "Mr. zzz", 100);
    // myBankAccount.addDeposit(100); //! Calling normal function
    myBankAccount.addDeposit = 50; //! Calling setter function
    // const myBalance = myBankAccount.getBalance();
    const myBalance = myBankAccount.balance; //! Calling getter function

    console.log(myBalance);
  }
}
