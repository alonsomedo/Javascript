const account = {
    name:'Alonso Medina',
    expenses: [],
    income: [],
    addExpense:function(description,amount){
        this.expenses.push({
            description:description,
            amount:amount
        })
    },
    addIncome:function(description, amount){
        this.income.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary:function(){
        totalExpenses = function(expenses){
            let total = 0
            for(i=0; i<expenses.length; i++){
                total += expenses[i].amount
            }
            return total
        }
        let totalIncome = 0
        this.income.forEach(function(income){
            totalIncome += income.amount
        })
        return `${this.name} has a balance of ${totalIncome - totalExpenses(this.expenses)}. $${totalIncome} in incomes. ${totalExpenses(this.expenses)} in expenses.`
    }
}

account.addExpense('Buy a car',800)
account.addExpense('Buy a cycle',200)
account.addIncome('Repair computer',1500)
account.addIncome('Solve math problem',100)
console.log(account.getAccountSummary())

//Expense --> description, amount
//addExpense --> two arguments (description, amount)
//getAccountSummary --> total up all expenses --> Alonso Medina has $1250 in expenses.

//add income array to account
//addIncome method { description, amount}
//Tweak getAccountSummary Alonso has a balance of $ 10. $100 in income. $90 in expenses.