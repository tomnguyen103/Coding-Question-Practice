import java.util.*;

public class permuteElement {
    public static void main(String[] args) {
        int[] newArray = {1,2,3};
        System.out.println(Arrays.toString(newArray));
        System.out.println(permute(newArray));
    }
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        helper_function(result, new ArrayList<>(), nums);
        return result;
    }
    static void helper_function(List<List<Integer>> result, List<Integer> temp, int[] numbs){
        if(temp.size() == numbs.length){
            result.add(new ArrayList<>(temp));
            return;
        }
        for(int i=0; i<numbs.length;i++){
            if(temp.contains(numbs[i])){
                continue;
            }
            temp.add(numbs[i]);
            helper_function(result, temp, numbs);
            temp.remove(temp.size() - 1);
        }
    }
}