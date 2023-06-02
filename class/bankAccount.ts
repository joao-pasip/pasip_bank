import { IBankAccountBase } from '../interfaces/bankAccountBase.interface';
import { CustomError } from '../error/customError';

export abstract class BankAccount extends IBankAccountBase {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    super();
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): number => {
    if(this.validateStatus() && amount > 0){
      return this.balance += amount;
    }

    throw new CustomError(404, 'Conta inválida');
  }

  withdraw = (amount: number): number => {
    if(this.validateStatus() && this.validateWithdraw(amount)){
      return this.balance -= amount;
    }

    throw new CustomError(404, 'Valor insuficiente');
  }

  getBalance = (): number => {
    return this.balance;
  }

  validateWithdraw = (amount: number): boolean => {
    if(amount <= this.balance) {
      return true;
    }
    return false;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new CustomError(404, 'Conta inválida');
  }

  getStatus = (): boolean => {
    return this.status;
  }

}