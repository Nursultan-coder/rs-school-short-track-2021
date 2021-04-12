const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    const del = this.head;
    this.head = this.head.next;
    this.length--;

    return del.value;
  }
}

module.exports = Queue;
