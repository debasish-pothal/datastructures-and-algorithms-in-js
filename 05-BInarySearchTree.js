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

  breadthFirstSearch() {
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }

  preorderSearch() {
    const result = [];

    const traverse = (node) => {
      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  inorderSearch() {
    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  postorderSearch() {
    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      result.push(node.value);
    };

    traverse(this.root);

    return result;
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
console.log(bst.postorderSearch());
