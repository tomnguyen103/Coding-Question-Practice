/* The guess API is defined in the parent class GuessGame.
    @param num, your guess
    @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class guessGame extends GuessGame {
    public int guessNumber(int n) {
        int left = 0;
        int right = n;
        while (left<=right){
            int middle = left + (right-left)/2;
            int res = guess(middle);
            if(res == 0){
                return middle;
            }else if(res < 0){
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }
        return 1;
    }
}