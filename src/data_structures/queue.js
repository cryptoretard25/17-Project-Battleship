export default class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  enqueue(el) {
    return this.items.push(el);
  }
  dequeue() {
    return this.items.shift();
  }
  clear(){
    return this.items = []
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  last() {
    if (this.size < 1) return;
    return this.items[this.size() - 1];
  }
  size() {
    return this.items.length;
  }
  print() {
    return this.items;
  }
}
