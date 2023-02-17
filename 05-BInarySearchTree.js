class Node {
  value = null;
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let node = this.root;

    while (node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          return;
        }

        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          return;
        }

        node = node.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let node = this.root;

    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  getMin() {
    if (!this.root) {
      return null;
    }

    let node = this.root;

    while (node) {
      if (!node.left) {
        return node.value;
      }
      node = node.left;
    }

    return null;
  }

  getMax() {
    if (!this.root) {
      return null;
    }

    let node = this.root;

    while (node) {
      if (!node.right) {
        return node.value;
      }

      node = node.right;
    }

    return null;
  }
}

const bst = new BinarySearchTree();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);
console.log(bst.getMax());
