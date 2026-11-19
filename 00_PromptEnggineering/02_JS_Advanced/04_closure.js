//closure: A closure is created when an inner function remembers variables from its outer function, even after the outer function has finished executing.


function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);

account.deposit(50);
console.log(account.getBalance()); // 150