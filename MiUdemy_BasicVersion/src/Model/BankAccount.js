export class BankAccount{

    constructor(accNo, sortCo, balance){
        this.accountNumber = accNo
        this.sortCode = sortCo
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
        return this.balance
    }

    addInterest(interest){
        let interestAdjust = 1+ (interest/100)
        this.balance *= interestAdjust
        return this.balance
    }
}