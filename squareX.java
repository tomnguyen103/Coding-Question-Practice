
public class squareX {
    public static void main(String[] args) {
        int number = 35;
        int answer = mySqrt(number);
        System.out.println("Square root of " + number + " in whole number is " + answer);
    }

    public static int mySqrt(int x) {
        if(x<2){
            return x;
        }
        long num;
        int left = 2;
        int right = x/2;
        int middle;
        while(left<= right){
            middle = left + (right-left)/2;
            num = (long) middle * middle;
            if(num>x){
                right = middle - 1;
            }else if(num<x){
                left = middle + 1;
            }else{
                return middle;
            }
        }
        return right;
    }
}
