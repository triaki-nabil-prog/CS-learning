// a binary tree node 
const node = function newNodeCreation(data) {
    return {
        data,
        left: null,
        right: null
    };
}
// root of the binary tree
const tree = function (array) {
    let sortedArray = [...new Set(array.sort(function (a, b) { return b - a }))];
    return {
        root: buildTree(sortedArray,0,sortedArray.length-1)
    };
}
//  function to create a balanced binary tree from sorted array 
const buildTree = function (array, start, end) {
    //base case to stope recursion 
    if (start > end) {return null;}
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

let newTree=tree([5,5,5,8,7,4,6,9,8,7,6,5]);
console.log(newTree);
prettyPrint(newTree.root);

