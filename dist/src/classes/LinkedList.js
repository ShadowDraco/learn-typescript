"use strict";
import Node from "./Node.js";
export default class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    for (let i = 0; i < data.length; i++) {
      const newNode = new Node(data[i]);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  // no need to create a custom type, just make the string verify itself!
  read(returnType) {
    let current = this.head;
    let values = [];
    while (current != null) {
      returnType === "objects"
        ? values.push(current)
        : values.push(current.data);
      current = current.next;
    }
    return values;
  }
  includes(value) {
    let current = this.head;
    while (current != null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }
}
