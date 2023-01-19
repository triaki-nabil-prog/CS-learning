// linked list factory function that represents the full lits 
function LinkedList() {
    // method for traversing then appending a new node to the tail of the list 
    const append = function (value) {
        // create a new node with the value 
        let node = Node(value);
        // if the linklist is empty head is null then add new node pointed by the head 
        if (this.head == null) { this.head = node; }
        // else look for the end of the link list when next = null and add the new node pointed by the previous one 
        else {
            let tmp = this.head;
            while (tmp.next !== null) { tmp = tmp.next; }
            tmp.next = node;
        }
    };
    // prepending a new node to the head of the link list
    const prepend = function (value) {
        // create a new node with the value 
        let node = Node(value);
        node.next = this.head;
        this.head = node;
    }
    // calculate number of nodes in the linked list
    const size = function () {
        let size = 0;
        let tmp = this.head;
        while (tmp !== null) {
            tmp = tmp.next;
            size++;
        }
        return size;
    }
    // returns the first node in the list
    const findHead = function () {
        return this.head.value;
    }
    // returns the last node in the list
    const findTail = function () {
        let tail = this.head;
        while (tail.next !== null) { tail = tail.next }
        return tail;
    }
    // returns the node at the given index 
    const at = function (index) {
        let tmp = this.head;
        if (index < 0) return;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        return tmp;
    }
    //remove the last element from the list
    const pop = function () {
        let tmp = this.head;
        while (tmp.next.next !== null) { tmp = tmp.next; }
        tmp.next = null;
        return tmp;
    }
    //returns true if the passed in value is in the list 
    const contains = function (value) {
        let tmp = this.head;
        while (tmp !== null) {
            if (tmp.value == value) {
                return true;
            }
            tmp = tmp.next;
        }
        return false;
    }
    // returns the index of the node containing value or null if not found 
    const find = function (value) {
        let index = 0;
        let tmp = this.head;
        while (tmp !== null) {
            if (tmp.value == value) {
                return index;
            }
            tmp = tmp.next;
            index++;
        }
        return null;
    }
    //represent the linked list objects as strings 
    const toString = function () {
        let linkedList = [];
        let tmp = this.head;
        while (tmp !== null) {
            linkedList.push(`(${tmp.value})->`);
            tmp = tmp.next;
        }
        return linkedList;
    }

    return { head: null, append, prepend, size, findHead, findTail, at, pop, contains, find, toString };
}



// node factory function containing a value and link to the next node 
function Node(value = null, next = null) {
    this.value = value;
    this.next = next;
    return { value, next };
}



let linkedListOne = LinkedList();

linkedListOne.append(5);
linkedListOne.append(10);
linkedListOne.prepend(12);
linkedListOne.prepend(13);
linkedListOne.prepend(16);
console.log(linkedListOne.size());
console.log(linkedListOne.findHead());
console.log(linkedListOne.findTail());
console.log(linkedListOne.at(1));
console.log(linkedListOne.pop());
console.log(linkedListOne.contains(12));
console.log(linkedListOne.contains(20));
console.log(linkedListOne.find(20));
console.log(linkedListOne.find(13));
console.log(linkedListOne.toString());

console.log(linkedListOne);