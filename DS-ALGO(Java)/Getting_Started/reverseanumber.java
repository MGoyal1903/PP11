import java.util.*;
   
   public class reverseanumber{
   
   public static void main(String[] args) {
     // write your code here  
     Scanner scn= new Scanner(System.in);
     System.out.println("Enter number");
     int n = scn.nextInt();
     int rem=0;
     while(n!=0)
     {
         rem=n%10;
         n=n/10;
         System.out.println(rem);
     }
    }
   }