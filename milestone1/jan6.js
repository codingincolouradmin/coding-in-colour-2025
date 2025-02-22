
// Task properites: title, description, bg Colour, deadline, isComplete, onGoing
// Task methods: change completion, change ongoing.

// class Task {
//     constructor(title, description, bgColour, deadLine, isOnGoing) { // define properties
//         this.title = title
//         this.description = description
//         this.bgColour = bgColour
//         this.deadLine = deadLine
//         this.isOnGoing = isOnGoing
//         this.isComplete = false
//     }
//     // methods
//     markComplete() {
//        this.isComplete = true 
//     }

//     toggleOngoing(){
//        this.isOnGoing = !this.isOnGoing 
//     }

//     displayTask(){
//         const checkComplete =  this.isComplete ? "Completed" : "Pending"
//         console.log(`Task: ${this.title}`)
//         console.log(`Description: ${this.description}`)
//         console.log(`Status: ${checkComplete}`)
//         console.log(title)
//     }
// }


// const newTask = new Task("read books","read 100 books this year","red","1-12-2025",true) 

// newTask.displayTask()
// newTask.markComplete()
// newTask.displayTask()

// newTask.markComplete()
// newTask.toggleOngoing()

// newTask.toggleOngoing()

// newTask.displayTask()

/***
 * 
 * 
 */

class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
        console.log(`Deposited ${amount}. New Balance: ${this.balance}`)
    }

    withdraw(amount){
        if (amount > this.balance) {
            console.log("Insufficient funds..")
        } else {
            this.balance -= amount
            console.log(`Witdrawed ${amount}. New Balance: ${this.balance}`)
        }
    }

    displayAccount(){
        console.log(`Account Holder:  ${this.accountHolder}`)
        console.log(`Balance: ${this.balance}`)
    }
}

const myAccount = new BankAccount("Yaman", 10000)
myAccount.displayAccount()

// deposit 5000
myAccount.deposit(5000)
// withdraw 12000
myAccount.withdraw(12000)
// withdraw 12000
myAccount.withdraw(12000)

