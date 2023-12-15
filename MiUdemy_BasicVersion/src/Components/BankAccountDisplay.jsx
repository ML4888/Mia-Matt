import { useState } from "react";

export default function BankAccountDisplay ({accountModel}){

    const [account, setAccount] = useState(accountModel)

    return <div>
        Account Number : {account.accountNumber}

        Balance: {account.balance}
    </div>
}