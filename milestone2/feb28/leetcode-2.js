import LinkedList from './LinkedList.js';

let myList = new LinkedList(); 
myList.append("a");              
myList.append("b");
myList.append("a");
myList.append("b");
myList.append("c");

console.log(`Before ${myList.print()}`)


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

console.log(`After ${removeDuplicates(myList).print()}`)


const middleNode = myList.head.next;

function deleteMiddleNode(middleNode) {
  // Make modifications
}

// TODO
console.log(`Before removal of middle: ${myList.print()}`)
deleteMiddleNode(middleNode);
console.log(`After removal of middle: ${myList.print()}`)



let newList = new LinkedList(); 
newList.append("a");              
newList.append("b");
newList.append("b");
newList.append("a");

// Stack usage
let stack = new Array(newList.length);
stack.push() // Put things in 
stack.pop() // Take things out

// TODO
function checkPalindrome(linkedList) {
  return false;
}

if (checkPalindrome(newList)) {
  console.log('This is not a palindrome')
} else {
  console.log('This is a palindrome');
}
