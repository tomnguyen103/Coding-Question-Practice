class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
    // O(v+e) time || O(v) space
    depthFirstSearch(array) {
    // Write your code here.
        array.push(this.name);
        for(const child of this.children){
            child.depthFirstSearch(array);
        }
        return array;
    }
}

const g = new Node('A');
g.addChild('B').addChild('C').addChild('D');
g.children[0].addChild('E').addChild('F');
g.children[1].addChild('G').addChild('H').addChild('I');
g.children[2].addChild('J').addChild('K');


console.log(g.depthFirstSearch([]));