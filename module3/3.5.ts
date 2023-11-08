{
  //** Access modifiers */
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

   public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

   public getBalance() {
      return this._balance;
    }
  }

  // extending child account from myBankAccount
  // class StudentAccount extends BankAccount {
  //   test(){
  //     this._balance
  //   }
  // }

  const myBankAccount = new BankAccount(1234, "Mr. zzz", 100);
  myBankAccount.addDeposit(100);
  const myBalance = myBankAccount.getBalance();
  console.log(myBalance);
  //
}
