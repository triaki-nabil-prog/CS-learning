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
            while (root.left != null) {
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
    //sort and delete duplicated values 
    let sortedArray = [...new Set(array.sort(function (a, b) { return a - b }))];
    return {
        root: buildTree(sortedArray, 0, sortedArray.length - 1),
        insert,
        remove,
        find,
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
newTree.remove(8);
console.log(newTree.find(6));
prettyPrint(newTree.root);


