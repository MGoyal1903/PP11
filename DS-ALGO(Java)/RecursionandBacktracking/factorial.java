
// 1. You are given a number n.
// 2. You are required to calculate the factorial of the number. Don't change the signature of factorial function.

import java.util.*;

public class factorial {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int res = factorial(n);
        System.out.println(res);
    }

    public static int factorial(int n){
        if(n==0)
        {
            return 1;
        }
        int res = factorial(n-1);
        res = n*res;
        return res;
    }

    
    
    
}
