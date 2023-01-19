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

    return { head : null, append, prepend };
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

console.log(linkedListOne);