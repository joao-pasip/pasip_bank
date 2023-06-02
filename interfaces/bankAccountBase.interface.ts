import { NotImplementedException } from "../error/exception";
import { IBankAccount } from './bankAccount.interface';

export class IBankAccountBase implements IBankAccount {
  setName(name: string): string {
    throw new NotImplementedException();
  }

  getName(): string {
    throw new NotImplementedException();
  }

  deposit(amount: number): number {
    throw new NotImplementedException();
  }

  withdraw(amount: number): number {
    throw new NotImplementedException();
  }

  getBalance(): number {
    throw new NotImplementedException();
  }
}