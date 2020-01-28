class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}

function branchSums(root) {
    // Write your code here.
    

}

const g = new BinaryTree(1).insert([2]);

console.log(branchSums(g));
