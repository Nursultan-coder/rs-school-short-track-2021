class Stack {
  constructor() {
    this.newStack = [];
  }

  push(element) {
    this.newStack.push(element);
  }

  pop() {
    return this.newStack.pop();
  }

  peek() {
    return this.newStack[this.newStack.length - 1];
  }
}

module.exports = Stack;
