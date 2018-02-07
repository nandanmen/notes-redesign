class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  render() {

  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  render(node) {
    node.render();
    render(node.left);
    render(node.right);
  }
}