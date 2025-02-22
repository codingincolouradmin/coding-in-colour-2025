// class Stack {
//     constructor() {
//         this.stack = []
//     }
//     // push
//     push(value){
//         this.stack.push(value)
//     }
//     // pop
//     pop() {
//         if(this.stack.length == 0){
//             return "stack is empty"
//         }
//         return this.stack.pop() 
//     }
//     // peek
//     peek(){
//         if(this.stack.length == 0){
//             return "stack is empty"
//         }
//         return this.stack[this.stack.length -1]
//     }

//     dispalyStack(){
//         console.log(this.stack)
//     }
// }


// const stackBroweser = new Stack()
// stackBroweser.push(10)
// stackBroweser.push(22)
// stackBroweser.push(30)
// stackBroweser.dispalyStack()
// stackBroweser.pop()

// console.log(stackBroweser.peek())


// const stackTasks = new Stack()


/**
 * Queue example
 * 
 */

// class Queue {
//     constructor(){
//         this.queue = []
//     }

//     // enqueue
//     enqueue(value){
//         this.queue.push(value)
//     }
//     // dequeue
//     dequeue(){
//         if(this.queue.length == 0){
//             return "Queue is empty"
//         }
//         return this.queue.shift()
//     }
//     // front
//     front(){
//         if(this.queue.length == 0){
//             return "Queue is empty"
//         }
//         return this.queue[0]
//     }
//     // rear
//     rear(){
//         if(this.queue.length == 0){
//             return "Queue is empty"
//         }
//         return this.queue[this.queue.length-1]
//     }
//     //display
//     dispalyQueue(){
//         console.log(this.queue)
//     }

// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)

// console.log("Queue front element: ", queue.front())
// console.log("Queue rear element: ", queue.rear())

// queue.dequeue()
// queue.dequeue()

// queue.dispalyQueue()


class BrowerHistory {
    constructor() {
        this.backStack = []
        this.forwardStack = []
    }
    // back
    back(){
        if (this.backStack.length > 1) {
            const page = this.backStack.pop()
            this.forwardStack.push(page)
            return this.backStack[this.backStack.length - 1]
        }
        return null
    }
    // forward
    forward(){
        if(this.forwardStack.length > 0){
            const page = this.forwardStack.pop()
            this.backStack.push(page)
            return page
        }
        return null
    }
    // visit a page
    visit(page){
        this.backStack.push(page)
    }
}

const history = new BrowerHistory()
history.visit("page 1")
history.visit("page 2")
history.visit("page 3")
history.visit("page 4")

console.log(history.back())
console.log(history.back())

console.log(history.forward())