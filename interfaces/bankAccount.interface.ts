export interface IBankAccount {
  balance?: number;
  setName(name: string): string;
  getName(): string;
  deposit(amount: number): number;
  withdraw(amount: number): number;
  getBalance(): number;
}