// 1. You are given a number x.
// 2. You are given another number n.
// 3. You are required to calculate x raised to the power n. Don't change the signature of power function.

// Note1 -> The previous version expects the call stack to be of n height. This function expects call function to be only log(n) high.

import java.util.*;

public class powerLogarithmic {

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


    // Not Optimized

    // public static int power(int x, int n){
        // count++;
    //     if(n==0)
    //     {
    //         return 1;
    //     }
        
    //     if(n%2==0)
    //     {
    //         return  power(x,n/2) * power(x,n/2);
    //     }
    //     else
    //     {
    //         return  x * power(x,n/2) * power(x,n/2);
    //     }
    // }
    



    // Optimized steps taken are low
    public static int power(int x, int n){
        count++;
        if(n==0)
        {
            return 1;
        }
        
        int XpowNBy2 = power(x,n/2);
        int XpowN = XpowNBy2 * XpowNBy2;
        
        if(n % 2==1)
        {
         XpowN = XpowN * x;
        }
        return XpowN;
    }

}