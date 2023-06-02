import { BankAccount } from './bankAccount';

export class PeopleAccount extends BankAccount {
  private doc_id: string;

  constructor(name: string, accountNumber: number, doc_id: string) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}