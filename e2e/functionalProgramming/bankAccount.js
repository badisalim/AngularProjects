class BankAccount {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        return this.balance -= amount;
    }
    setName(name) {
        this.name = name;

    }
    setAccountNumber(accountNumber) {
        this.accountNumber = accountNumber;
    }

    getName() {
        return this.name;

    }
    getAccountNumber() {

        return this.accountNumber;
    }
}
const bankAccount = new BankAccount();
bankAccount.deposit(100.53);
bankAccount.withdraw(10);
console.log("Available balance:" + bankAccount.getBalance() + " Euro");
bankAccount.withdraw(7.95);
bankAccount.withdraw(8.45);
bankAccount.withdraw(4.13);
bankAccount.setName("Badi Raslan")
bankAccount.setAccountNumber("Account Number: " + 456789321)
console.log(bankAccount.getAccountNumber());
console.log("Name: " + bankAccount.getName());
console.log("Available balance:" + bankAccount.getBalance() + " Euro");