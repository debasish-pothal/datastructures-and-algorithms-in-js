class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class Stack {
  top = null;
  length = 0;

  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length += 1;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length += 1;
  }

  pop() {
    const node = this.top;

    if (!node) {
      return node;
    }

    this.top = node.next;
    node.next = null;

    this.length -= 1;

    if (this.length === 0) {
      this.top = null;
    }

    return node;
  }
}

const stack = new Stack(0);
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
