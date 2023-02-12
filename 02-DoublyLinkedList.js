class Node {
  value = null;
  prev = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  traverse() {
    const result = [];

    let node = this.head;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length += 1;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const lastNode = this.tail;
    this.tail = lastNode.prev;
    this.tail.next = null;
    lastNode.prev = null;

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return lastNode;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length += 1;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const firstNode = this.head;
    this.head = firstNode.next;
    firstNode.next = null;
    this.head.prev = null;

    this.length -= 1;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const node = this.get(index);
      const nextNode = node.next;
      const newNode = new Node(value);

      newNode.next = nextNode;
      newNode.prev = node;

      node.next = newNode;
      nextNode.prev = newNode;

      this.length += 1;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length) {
      return this.pop();
    } else {
      const node = this.get(index);

      node.prev.next = node.next;
      node.next.prev = node.prev;

      node.next = null;
      node.prev = null;

      this.length -= 1;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return node;
    }
  }

  reverse() {
    let node = this.head;
    let prev = null;

    while (node) {
      prev = node.prev;
      node.prev = node.next;
      node.next = prev;
      node = node.prev;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

const dll = new DoublyLinkedList(0);
dll.push(1);
dll.push(2);
dll.unshift(-1);
dll.unshift(-2);

dll.reverse();

console.log(dll.traverse());
