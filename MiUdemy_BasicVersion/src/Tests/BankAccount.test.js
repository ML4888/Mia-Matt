import { BankAccount } from "../Model/BankAccount";

test("Test and interest applies correctly", () => {
    //test data
    let testBalance = 100
    let testInterest = 5
    let testAccount = new BankAccount (0, "test", testBalance)

    //expected value
    let expectedOutput = 105

    //derive actual value
    let actualOutput = testAccount.addInterest(testInterest)

    expect (actualOutput).toBe(expectedOutput)
})