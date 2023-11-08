{
  //** Access modifiers */
  class BankAccount {
   readonly id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  }

  const myBankAccount = new BankAccount(1234, "Mr. zzz", 100);
  myBankAccount.id = 
  //
}
