import { PeopleAccount } from './class/peopleAccount';
import { CompanyAccount } from './class/companyAccount';
import { PremiumAccount } from './class/premiumAccount';

const userPasip = new PeopleAccount('Pasip', 10, '2323');
// userPasip.deposit(20);
// userPasip.withdraw(20);
// console.log(userPasip);
// console.log(userPasip.getBalance());

const premium = new PremiumAccount('Xablau', 20);
// premium.deposit(100);
// console.log(premium);


const company = new CompanyAccount('tester', 100, '47100');
// company.getLoan(1000);
// console.log(company);
