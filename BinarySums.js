class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sums = [];
    calculateSums(root,0,sums);
    return sums;
}

function calculateSums(node, runningSum, sums){
    if(!node) return;

    let newRunningSum = runningSum + node.value;
    if(!node.left && !node.right){
        sums.push(newRunningSum);
        return;
    }

    calculateSums(node.left,newRunningSum,sums);
    calculateSums(node.right, newRunningSum, sums);
}

const g = new BinaryTree(1);
g.left = new BinaryTree(9);
g.right = new BinaryTree(10);
g.left.right = new BinaryTree(2);
g.left.left = new BinaryTree(11);
g.right.right = new BinaryTree(20);
g.right.left = new BinaryTree(59);
g.right.right.right = new BinaryTree(15);

console.log(g);
console.log(branchSums(g));
