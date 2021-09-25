def powerOfFour(n):
    power = 0
    while 4** power < n:
        power += 1
    
    if 4 ** power == n:
        return True
    else:
        return False

print(powerOfFour(16))
print(powerOfFour(25))
