const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      let node = new Node(data);

      if (this.length === 0) {
        this._head = node;
        this._tail = node;
      }else if (this.length !== 0) {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      if (this._head != null) {
        return this._head.data;
      }else {
        return null;
      }
    }

    tail() {
      if (this._tail != null) {
        return this._tail.data;
      }else {
        return null;
      }
    }

    at(index) {
      let currentNode = this._head;
      for (var i = 0; i < this.length; i++) {
        if (i === index) {
          return currentNode.data;
        }else {
          currentNode = currentNode.next;
        }
      }
    }

    insertAt(index, data) {
      let currentNode = this._head;
      let dataArr = [];
      for (var i = 0; i < this.length; i++) {
        dataArr.push(currentNode.data);
        currentNode = currentNode.next;
      }
      dataArr.splice(index, 0, data);
      this.clear();
      dataArr.forEach((value) => { this.append(value) });
      return this;
    }

    isEmpty() {
      if (this.length === 0) {
        return true;
      }else {
        return false;
      }
    }

    clear() {
      this.length = 0;
      this._head =null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      let currentNode = this._head;
      for (var i = 0; i < this.length; i++) {
        if (i === index) {
          if (currentNode.prev !== null) {
            currentNode.prev.next = currentNode.next;
          }
          if (currentNode.next !== null) {
            currentNode.prev.prev = currentNode.prev;
          }
          currentNode.data = 0;
          currentNode.prev = undefined;
          currentNode.next = undefined;
          this.length--;
          break;
        }else {
          currentNode = currentNode.next;
        }
      }
      return this;
    }

    reverse() {
      let currentNode = this._head;
      let dataArr = [];
      for (var i = 0; i < this.length; i++) {
        dataArr[i] = currentNode.data;
        currentNode = currentNode.next;
      }
      this.clear();
      dataArr.reverse();
      for (var i = 0; i < dataArr.length; i++) {
        this.append(dataArr[i]);
      }
      return this;
    }

    indexOf(data) {
      let currentNode = this._head;
      for (var i = 0; i < this.length; i++) {
        if (currentNode.data === data) {
          return i;
        }else {
          currentNode = currentNode.next;
        }
      }
      return -1;
    }
}

module.exports = LinkedList;
