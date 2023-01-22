// a binary tree node 
const node = function rootCreation(data) {
    return {
        data,
        left: null,
        right: null
    };
}
// root of the binary tree
const tree = function (array) {
    //insert a new node in the binary tree 
    const insert = function (value, root = this.root) {
        //if tree empty add new node to root
        if (root === null) {
            root = node(value);
            return root;
        }
        //else traverse down the tree to the leaf 
        if (root.data > value) {
            root.left = insert(value, root.left);
        }
        else if (root.data < value) {
            root.right = insert(value, root.right);
        }
        return root;
    }
    // delete a specific node from the binary tree
    const remove = function (value, root = this.root) {
        //base case 
        if (root === null) {
            return root;
        }
        //else traverse down the tree to the leaf 
        if (root.data > value) {
            root.left = remove(value, root.left);
        }
        else if (root.data < value) {
            root.right = remove(value, root.right);
        }
        // if key is same as root's
        // key, then This is the
        // node to be deleted
        else {
            //when node have only one childe 
            if (root.right === null) {
                return root.left;
            }
            else if (root.left === null) {
                return root.right;
            }
            //node with two children 
            // get the inOrder childe who is smallest in the left subtree
            root.data = minValue(root.right);
            // delete the inOrder successor  
            root.right = remove(root.data, root.right);
        }
        // look for the min value in the left of subtree 
        function minValue(root) {
            let minv = root.data;
            while (root.left !== null) {
                minv = root.left.data;
                root = root.left;
            }
            return minv;
        }
        return root;
    }
    //accepts a value and returns a node with the given value 
    const find = function (value, root = this.root) {
        //base case 
        if (root === null) {
            return root;
        }
        //else traverse down the tree to the leaf 
        if (root.data > value) {
            return find(value, root.left);
        }
        else if (root.data < value) {
            return find(value, root.right);
        }
        else {
            return root;
        }
    }
    // breadth first level order traversal of the balanced  binary tree 
    const levelOrder = function (Callback) {
        //first in first out queue 
        const queue = [];
        const LOList = [];
        //enqueue the root node 
        queue.push(this.root);
        // while there is at least one discovered node in the queue keep going
        while (queue.length > 0) {
            // dequeue first element of queue 
            const current = queue.shift();
            //visit the current node 
            //if callback is provided use it
            //else return a array of the level order list 
            if (Callback) { Callback(current); }
            else { LOList.push(current.data); }
            //enqueue the children 
            if (current.left !== null) { queue.push(current.left); }
            if (current.right !== null) { queue.push(current.right); }
        }
        if (LOList.length > 0) return LOList;
    }
    // depth first preOrder traversal of the balanced  binary tree 
    const preOrder = function (Callback, node = this.root, preOrderList = []) {
        //base case 
        if (node === null) { return node; }
        //preOrder
        if (Callback) { Callback(node); }
        else { preOrderList.push(node.data); }
        preOrder(Callback, node.left, preOrderList);
        preOrder(Callback, node.right, preOrderList);

        return preOrderList;
    }
    // depth first inOrder traversal of the balanced  binary tree 
    const inOrder = function (Callback, node = this.root, inOrderList = []) {
        //base case 
        if (node === null) { return node; }
        //inOrder
        inOrder(Callback, node.left, inOrderList);
        if (Callback) { Callback(node); }
        else { inOrderList.push(node.data); }
        inOrder(Callback, node.right, inOrderList);
        return inOrderList;
    }
    // depth first postOrder traversal of the balanced  binary tree 
    const postOrder = function (Callback, node = this.root, postOrderList = []) {
        //base case 
        if (node === null) { return node; }
        //postOrder
        postOrder(Callback, node.left, postOrderList);
        postOrder(Callback, node.right, postOrderList);
        if (Callback) { Callback(node); }
        else { postOrderList.push(node.data); }

        return postOrderList;
    }
    // calculate the height of the given node 
    const height = function (node) {
        //base case
        if (node === null) { return 0; }
        //recursively call all the nodes from the left and right subtree of the root node

        leftHeight = height(node.left);
        rightHeight = height(node.right);
        return (Math.max(leftHeight, rightHeight) + 1);
    }
    // calculate the depth of the given node 
    const depth = function (node, root = this.root) {
        // Initialize distance as -1
        let dist = -1;
        //Base case 
        if (root === null) { return -1; }
        if (node === root) { return dist + 1; }
        else if ((dist = depth(node, root.left)) >= 0) { return dist + 1 }
        else if ((dist = depth(node, root.right)) >= 0) { return dist + 1 }
        return dist;
    }
    //checks if tree is balanced
    const isBalanced = function (node = this.root) {
        let balance = false;
        //base case
        if (node === null) { return balance = true; }
        let diff = Math.abs(height(node.left) - height(node.right));
        if (diff <= 1 && isBalanced(node.left) && isBalanced(node.right)) { return balance = true; }
        return balance;
    }
    //sort and delete duplicated values 
    const sortedArray = [...new Set(array.sort(function (a, b) { return a - b }))];
    return {
        root: buildTree(sortedArray, 0, sortedArray.length - 1),
        insert,
        remove,
        find,
        levelOrder,
        preOrder,
        inOrder,
        postOrder,
        height,
        depth,
        isBalanced,
    };
};


//  function to create a balanced binary tree from sorted array 
const buildTree = function (array, start, end) {
    //base case to stope recursion 
    if (start > end) { return null; }
    //get the middle element
    let mid = Math.floor((start + end) / 2);
    // make it into a node 
    let Node = node(array[mid]);
    //create the left subtree 
    Node.left = buildTree(array, start, mid - 1);
    //create the right subtree
    Node.right = buildTree(array, mid + 1, end);
    return Node;
}

//binary search tree visualization 
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let newTree = tree([5, 5, 5, 8, 7, 4, 6, 9, 8, 7, 6, 5]);



// test 
console.log(newTree);
newTree.insert(10);
newTree.insert(2);
newTree.insert(3);
newTree.insert(25);
newTree.insert(26);
newTree.insert(27);
newTree.insert(28);
newTree.insert(29);
newTree.remove(8);
console.log(newTree.find(6));
prettyPrint(newTree.root);
console.log(newTree.levelOrder());
newTree.levelOrder(console.log);
console.log(newTree.preOrder());
newTree.preOrder(console.log);
console.log(newTree.inOrder());
newTree.inOrder(console.log);
console.log(newTree.postOrder());
newTree.postOrder(console.log);
console.log(newTree.height(newTree.find(6)));
console.log(newTree.depth(newTree.find(4)));
console.log(newTree.depth(newTree.find(6)));
console.log(newTree.depth(newTree.find(25)));
console.log(newTree.isBalanced());

