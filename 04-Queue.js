class Node {
  value = null;
  prev = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class Queue {
  start = null;
  end = null;
  length = 0;

  constructor(value) {
    const node = new Node(value);
    this.start = node;
    this.end = node;
    this.length = 1;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.start) {
      this.start = node;
      this.end = node;
    } else {
      this.end.next = node;
      node.prev = this.end;
      this.end = node;
    }

    this.length += 1;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const firstNode = this.start;
    this.start = firstNode.next;

    firstNode.next = null;
    this.start.prev = null;

    this.length -= 1;

    if (this.length === 0) {
      this.start = null;
      this.end = null;
    }

    return firstNode;
  }
}

const queue = new Queue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
