from random import uniform;
from math import pow;

def generate():
    return (uniform(-1,1), uniform(-1,1))

#check if the point is in circle
def is_in_circle(coords):
    return coords[0]*coords[0]+coords[1]*coords[1]<1

def estimate():
    iter = 10000000;
    in_circle = 0;
    for _ in range(iter):
        if is_in_circle(generate()):
            in_circle+=1
    pi_over_four = in_circle/iter
    return pi_over_four*4


