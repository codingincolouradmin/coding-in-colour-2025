// Node class
class Node {
  /**
   * REQUIRES: data - a value of any type.
   * EFFECTS: Creates a new Node instance with the provided data.
   * RETURNS: A new Node object.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  /**
   * REQUIRES: None.
   * EFFECTS: Initializes an empty LinkedList.
   * RETURNS: A new LinkedList instance.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * REQUIRES: value - a value of any type to add.
   * EFFECTS: Creates a new node with the given value and appends it to the end of the list.
   * RETURNS: None.
   */
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If list is empty, new node becomes both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Attach to the end and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * REQUIRES: index - a valid index (0-based) within the list bounds.
   * EFFECTS: Removes the node at the specified index.
   * RETURNS: The value of the removed node, or null if the index is out of bounds.
   */
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let removedNode;
    if (index === 0) {
      // Remove the head
      removedNode = this.head;
      this.head = this.head.next;
      // If list becomes empty, update tail
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      removedNode = current;
      previous.next = current.next;
      // If removed node was the tail, update tail
      if (index === this.length - 1) {
        this.tail = previous;
      }
    }
    this.length--;
    return removedNode.data;
  }

  /**
   * REQUIRES: None.
   * EFFECTS: Iterates over the linked list and collects node values into an array.
   * RETURNS: An array containing all node values in order.
   */
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  /**
   * REQUIRES: None.
   * EFFECTS: Prints the linked list in the format "value -> value -> ... -> value".
   * RETURNS: None.
   */
  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.data;
      if (current.next) {
        output += " -> ";
      }
      current = current.next;
    }
    return output;
  }
}

// Export the LinkedList so it can be imported in another file.
export default LinkedList;