/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // if it's the inital push, assign thehead & tail
    if(this.head == null){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    };

    // find current tail and attach a next attribute
    this.tail.next = newNode;
    // re-assign the tail attribute to the new node
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    // find current head and attach a pointer from the new node to the head
    newNode.next = this.head;
    // simply re-assign head. Everything following still has a "next" att.
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    // if this was a doubly list we could find the tail then use prev.prev

    // start with head of the list
    let currentNode = this.head;

    // traverse thru the list until we find the index BEFORE null
    // stops w/ currentNode === to the node before the "tail"
    while(currentNode !== null){
      console.log(currentNode.val)
      currentNode = this.currentNode.next;
    }

    // re-assign tail. Removing the previous tail from the list. No need to assign next = null. This cuts eggectively cuts the list off.
    let tail = currentNode;
    return tail;
  }

  /** shift(): return & remove first item. */

  shift() {
    // locate the head
    let originalHead = this.head;
    // Re-assign the head to the .next property, all "next;s" stay the same
    this.head = this.head.next
    return originalHead
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let nodeIndex = this.head;
    let index = 0;
    
    // traverse thru the nodes
    while(nodeIndex){
      nodeIndex = nodeIndex.next;
      index++;

      // tracking the nodes we've gone thru check against desired index
      if(index === idx){
        return nodeIndex.val;
      }
    } 
    return -1
  }

  /** setAt(idx, val): set val at idx to val */
  // this one is werird, it doesn't accept beyond the 2nd index?

  setAt(idx, val) {

    if(idx > this.length || idx < 0){
      return new Error("Invalid index.")
    }

    // starts at 0 index, then counts up & compares against inx input
    let nodeIndx = 0;
    let node = this.head;

    while(node !== null){
      // if the node index count === idx
      if(nodeIndx === idx){
        // re-assign that nodes value to val input
        node.val = val;
      };

      // otherwuse, move onto next and add to indx count to compare
      node = node.next;
      nodeIndx = nodeIndx + 1;
    }
  }

  // ****otherwise, use the this.getAt(inx), then re-assign that value



  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let indexCount = 0;
    let node = this.head;

    if (this.length < idx || idx < 0) {
      throw new Error("Invalid index");
    };

    if(idx == 0){
      this.unshift(val);
      return;
    } else if (idx === this.length){
      this.push(val);
      return;
    };

    while(node !== null){
      // we have to pull the node BEFORE the input
      if(idx == indexCount -1 ){
        // grab/hold that current node's next for re-assignment
        let movedNext = this.node.next;
        // create the new node for inserting
        let newNode = new Node(val);
        // grabcurrent node and point to new node
        this.node.next = newNode;
        // new node point to previos "next" // the node moved
        newNode.next = movedNext;
        // increase the length to reflect the new node.
        this.length++;
        return;
      };

      indexCount = indexCount + 1;
      node = node.next;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if(idx >= this.length){
      return new Error("Invalid Index")
    };

    if(idx === 0){
      this.shift();
      return;
    }

    let indexCount = 0;
    let node = this.head;

      // gets Node before index to remove
      if(idx == indexCount -1){
        let prevIdxNode = this.node;
        let nodeForRemoval = prevIdxNode.next;
        let newNextNode = nodeForRemoval.next;

        // using the index prior to removal re-assign next to index after removal
        prevIdxNode.next = newNextNode;
        // subtract one from length to reflect Node removal
        this.length--;
      }

      indexCount++;
      node = node.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let nodes = this.head;
    
    // while we have a "next" node add the value to total and move to next
    while(nodes != null){
      total = total + nodes.val;
      nodes = nodes.next;
    }

    // while loop breaks when we reach the tail 
    return total/ this.length;
  }
}

module.exports = LinkedList;
