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
            console.log(root);
            root.left = insert(value, root.left);
        }
        else if (root.data < value) {
            console.log(root);
            root.right = insert(value, root.right);
        }
        return root;
    }
    // delete a specific node from the binary tree
    const remove = function (value) {
    }
    //sort and delete duplicated values 
    let sortedArray = [...new Set(array.sort(function (a, b) { return a - b }))];
    return {
        root: buildTree(sortedArray, 0, sortedArray.length - 1),
        insert,
        remove,
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

console.log(newTree);
newTree.insert(10);
prettyPrint(newTree.root);

