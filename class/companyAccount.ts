import { CustomError } from '../error/customError';
import { BankAccount } from './bankAccount';

export class CompanyAccount extends BankAccount {
  private cnpj: string;

  constructor(name: string, accountNumber: number, cnpj: string) {
    super(name, accountNumber);
    this.cnpj = cnpj;
  }

  getLoan = (amount: number): number => {
    if(this.getStatus()) {
      const newBalance = this.balance += amount;
      return newBalance;
    }
    throw new CustomError(404, 'Conta inválida');
  }
}