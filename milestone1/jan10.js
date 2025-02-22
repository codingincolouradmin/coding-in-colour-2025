/**
 * Node implementation
 */
class Node {
  // Fields
  data
  leftChild
  rightChild

  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
  setLeftChild(node) {
    this.leftChild = node
  }
  setRightChild(node) {
    this.rightChild = node;
  }
}

/**
 * BST Implementation
 */
class BST {
  // Fields
  root
  size

  // No empty case
  constructor(data) {
    this.root = new Node(data)
    this.size = 1;
  }

  // Insert Node
  insertVal(val) {
    // Create new node
    const newNode = new Node(val);
    // Find position
    let curr = this.root

    // Check if current is not null
    while (true) {
      // Greater than case
      if (val > curr.data) {  
        // Is there a child?
        if (curr.rightChild) {
          curr = curr.rightChild;
        } else {
          curr.setRightChild(newNode);
          this.size += 1;
          break;
        }
      } else if (val < curr.data) {
        // Less than case
        // Is there a left child?
        if (curr.leftChild) {
          curr = curr.leftChild
        } else {
          curr.setLeftChild(newNode);
          this.size += 1;
          break;
        }
      } else {
        // Duplicate insertion
        return;
      }
    }
  }

  // Insert Node Recursive
  insertValRecursive(val) {
    this.#insertValRecursiveHelper(this.root, val)
  }
  #insertValRecursiveHelper(curr, val) {
    // Check case
    if (curr.data < val) {
      // Right subtree case
      if (curr.rightChild) {
        return this.#insertValRecursiveHelper(curr.rightChild, val)
      } else {
        curr.setRightChild(new Node(val))
        this.size += 1
      }
    } else if (curr.data > val) {
      // Left subtree case
      if (curr.leftChild) {
        return this.#insertValRecursiveHelper(curr.leftChild, val)
      } else {
        curr.setLeftChild(new Node(val))
        this.size += 1
      }
    } else {
      // Duplicate case
      return
    }
  }

  // Remove Node -> assume it exists
  removeVal(val) {
    return 0;
  }

  // Search: returns Node if found, -1 otherwise
  search(lookupVal) {
    let curr = this.root
    while (true) {
      // Are we at our desired point?
      if (curr.data == lookupVal) {
        return curr;
      } else if (curr.data < lookupVal) {
        // Search right only if right child exists
        if (curr.rightChild) {
          curr = curr.rightChild;
        } else {
          break;
        }
      } else {
        // Search left only if left child exists
        if (curr.leftChild) {
          curr = curr.leftChild;
        } else {
          break;
        }
      }
    }
    return -1; // Not found
  }
  
  // Search: returns Node if found, -1 otherwise
  searchRecursive(lookupVal) {
    return this.#searchRecursiveHelper(this.root, lookupVal)
  }
  #searchRecursiveHelper(curr, lookupVal) {
    // Check case
    if (curr.data < lookupVal) {
      // Right subtree case
      if (curr.rightChild) {
        return this.#searchRecursiveHelper(curr.rightChild, lookupVal)
      } else {
        return -1
      }
    } else if (curr.data > lookupVal) {
      // Left subtree case
      if (curr.leftChild) {
        return this.#searchRecursiveHelper(curr.leftChild, lookupVal)
      } else {
        return -1
      }
    } else {
      // Found case
      return curr
    }
  }

  // FindMax
  findMax() {
    let curr = this.root
    // Move right as long as we have a right child
    while (curr.rightChild) {
      curr = curr.rightChild
    }
    return curr.data
  }
  
  // FindMin
  findMin() {
    let curr = this.root
    // Move left as long as we have a left child
    while (curr.leftChild) {
      curr = curr.leftChild
    }
    return curr.data
  }

  // In-order traversal
  inOrder() {
    // Keep track of traversal order for print
    let arr = []
    this.#inOrderHelper(this.root, arr)
    return arr;
  }
  #inOrderHelper(node, arr) {
    // Recursive case
    if (node) {
      this.#inOrderHelper(node.leftChild, arr)
      arr.push(node.data);
      this.#inOrderHelper(node.rightChild, arr)
    } else {
      // Base case
      return
    }
  }

  
  // Pre-order traversal: Node, Left, Right TODO
  #preOrder() {
    // Keep track of traversal order for print
    let arr = []
    this.#preOrderHelper()
    return arr
  }
  #preOrderHelper(node, arr) {
    // TODO
  }

  // Post-order traversal: Left, Right, Node TODO
  #postOrder() {
    // Keep track of traversal order for print
    let arr = []
    this.#postOrderHelper()
    return arr
  }
  #postOrderHelper(node, arr) {
    // TODO
  }

  // PrintTree (in-order traversal --> GPT)
  printTree() {
    if (!this.root) {
      console.log("The tree is empty.");
      return;
    }

    const queue = [this.root]; // Use a queue for level-order traversal
    while (queue.length > 0) {
      const curr = queue.shift();
      const left = curr.leftChild ? curr.leftChild.data : null;
      const right = curr.rightChild ? curr.rightChild.data : null;

      console.log(`Node: ${curr.data}, Left: ${left}, Right: ${right}`);

      if (curr.leftChild) queue.push(curr.leftChild);
      if (curr.rightChild) queue.push(curr.rightChild);
    }
  }
}

let myTree = new BST(12)
myTree.insertValRecursive(15)
myTree.insertValRecursive(8)
myTree.insertValRecursive(9)
myTree.insertValRecursive(18)
myTree.insertValRecursive(4)
console.log(myTree.inOrder())