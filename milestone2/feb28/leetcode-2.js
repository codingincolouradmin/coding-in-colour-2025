import LinkedList from './LinkedList.js';

let myList = new LinkedList(); 
myList.append("a");              
myList.append("b");
myList.append("a");
myList.append("b");
myList.append("c");

// console.log(`Before ${myList.print()}`)


function removeDuplicates(linkedList) {
  // Create the hashtable
  let seen = new Set();

  // Start the iteration for prev and current
  let curr = linkedList.head
  let prev = null;

  // Only allowed to iterate/update while we have a current
  while (curr) {
    if (seen.has(curr.data)) {
      // Case where the current node has data that is duplicate
      prev.next = curr.next; // previous points to curr's next, because current is a duplicate!
      curr = curr.next; // update the current

    } else {
      seen.add(curr.data)
      prev = curr; // previous points to current
      curr = curr.next; // update the current
    }
  }

  return linkedList
}

// console.log(`After ${removeDuplicates(myList).print()}`)


const middleNode = myList.head.next;

function deleteMiddleNode(middleNode) {
  // Make modifications
}

// TODO
// console.log(`Before removal of middle: ${myList.print()}`)
// deleteMiddleNode(middleNode);
// console.log(`After removal of middle: ${myList.print()}`)



let newList = new LinkedList(); 
newList.append("a");              
newList.append("b");
newList.append("b");
newList.append("a");

// Stack usage
let stack = new Array();

// TODO
function checkPalindrome(linkedList) {

  // First iteration fills the stack
  let curr = linkedList.head
  // populating our stack
  while (curr) {
    stack.push(curr.data);
    curr = curr.next;
  }

  // Second iteration empties the stack
  let curr2 = linkedList.head
  // empty the stack
  while (curr2) {
    const val = stack.pop();
    console.log(`comparing ${val} and ${curr2.data}`)
    if (val !== curr2.data) {
      return false
    }
    curr2 = curr2.next;
  }
  return true;
}

if (checkPalindrome(newList)) {
  console.log('This is a palindrome');
} else {
  console.log('This is not a palindrome')
}
