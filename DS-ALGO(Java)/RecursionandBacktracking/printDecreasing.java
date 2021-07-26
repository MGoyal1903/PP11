
// 1. You are given a positive number n. 
// 2. You are required to print the counting from n to 1.
// 3. You are required to not use any loops. Complete the body of print Decreasing function to achieve it.

import java.util.*;

public class printDecreasing {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        printDecreasing(n);
    }

    public static void printDecreasing(int n)
    {
        if(n==0)
        {
            return;
        }
        System.out.println(n);
        printDecreasing(n-1);

    }
    
    
}
