function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function(head) {
    if(head==null || head.next==null) return head;
    
    const next = head.next;
    head.next = swapPairs(head.next.next);
    next.next= head
    
    return next;
};
