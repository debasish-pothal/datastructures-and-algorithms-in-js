class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.tail = node;
    }

    this.length += 1;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let temp = this.head;

    while (node && node.next) {
      temp = node;
      node = node.next;
    }

    this.tail = temp;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const node = this.head;
    const nextNode = this.head.next;
    node.next = null;
    this.head = nextNode;

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return null;
    }

    let currentIndex = 0;
    let node = this.head;

    while (currentIndex < index) {
      node = node.next;
      currentIndex += 1;
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
      const node = this.get(index - 1);

      const newNode = new Node(value);
      newNode.next = node.next;
      node.next = newNode;
      this.length += 1;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const node = this.get(index - 1);
      const removedNode = node.next;

      if (node) {
        node.next = removedNode.next || null;
      }

      this.length -= 1;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      removedNode.next = null;
      return removedNode;
    }
  }

  reverse() {
    let prev = null;
    let node = this.head;
    let next = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    this.tail = this.head;
    this.head = prev;
  }
}

const ll = new LinkedList(0);
ll.push(1);
ll.push(2);
ll.unshift(-1);
ll.unshift(-2);
ll.insert(3, 0.5);
ll.insert(5, 1.5);
ll.reverse();
console.log(ll.traverse());
