let myAccount = {
    name: "Alonso Medina",
    expenses: 0,
    income: 0
}

//THIS CREATE A BINDING
// let otherAccount = myAccount
// otherAccount.income = 1000

// otherAccount = {}

let addExpense = function(account,amount){
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function(account, amount){
    account.income += amount
}

// resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

//getAccountSummary 
// Account for Alonso has $900. $1000 in income $1000 in expenses
let getAccountSummary = function(account){
    let balance =account.income - account.expenses
    return `Account for ${account.name} has $${balance} $${account.income} in income. $${account.expenses} in expenses`
}


addExpense(myAccount,2.5)


addIncome(myAccount, 200)
console.log(myAccount)
addExpense(myAccount, 100)
console.log(myAccount)
addExpense(myAccount, 100)
getAccountSummary(myAccount)
console.log(myAccount)
resetAccount(myAccount)
msg = getAccountSummary(myAccount)
console.log(msg)