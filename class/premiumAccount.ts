import { BankAccount } from "./bankAccount";

export class PremiumAccount extends BankAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): number => {
    const premiumDeposit = amount + 10;
    return this.balance += premiumDeposit;
  }
}