class LinkedList:
    def __init__(self,data,next = None):
        self.data = data
        self.next = next

def print_nodes(ll):
    start = end = ll

    while start:
        end = start
        total = 0
        skip = False    
        while end:
            total += end.data
            if total == 0:
                start = end
                skip = true
                break
            end = end.next
        if not skip:
            print(start.data)
        start = start.next

