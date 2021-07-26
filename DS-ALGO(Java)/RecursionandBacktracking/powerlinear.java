// 1. You are given a number x.
// 2. You are given another number n.
// 3. You are required to calculate x raised to the power n. Don't change the signature of power function .



import java.util.*;

public class powerlinear {

    static int count;

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int x = scn.nextInt();
        int n = scn.nextInt();
        int res = power(x , n);
        System.out.println(res);
        System.out.println("Steps Taken - " + count);
    }

    public static int power(int x, int n){
        count++;
        if(n==0)
        {
            return 1;
        }
        int pow = power(x , n-1);
        int res = (x * pow);
        return res;
    }

}
    

