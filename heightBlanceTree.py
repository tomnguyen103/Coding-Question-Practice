class Node:
    def __init__(self, data, left=None, right=None):
        self.data=data
        self.left=left
        self.right=right

def make_tree(array):
    if not array: #check if empty array or not
        return None
    
    mid = len(array)//2

    root = Node(array[mid])
    root.left = make_tree(array[:mid])
    root.right = make_tree(array[mid+1:])

    return root
    

def preOrder(node):
    if not node:
        return
    print(node.data),
    preOrder(node.left)
    preOrder(node.right)

arr = [1,2,3,4,5,6,7]
root = make_tree(arr);
preOrder(root);