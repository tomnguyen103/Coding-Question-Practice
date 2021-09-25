def bitwise_AND(m,n):
    res = m
    for i in range(m+1, n+1):
        res &= i
    return res

def bitwise_AND2(m,n):
    i = 0

    while m != n:
        m>>=1
        n>>=1
        i+= 1
    return n << i



print(bitwise_AND(10110 ,1011))
print(bitwise_AND2(1001001 ,1110001))
