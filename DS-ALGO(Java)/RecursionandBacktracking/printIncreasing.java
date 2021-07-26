// 1. You are given a positive number n. 
// 2. You are required to print the counting from 1 to n.
// 3. You are required to not use any loops. Complete the body of print Decreasing function to achieve it.


import java.util.*;

public class printIncreasing {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        printIncreasing(n);
    }

    public static void printIncreasing(int n) {

        if(n==0)
        {
            return;
        }
        printIncreasing(n-1);
        System.out.println(n);
        
    }


    
}
