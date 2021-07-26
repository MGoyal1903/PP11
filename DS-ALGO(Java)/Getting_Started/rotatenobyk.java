import java.util.*;
   
   public class rotatenobyk{
   
   public static void main(String[] args) {
     // write your code here  
     Scanner scn = new Scanner(System.in);
     System.out.println("Enter the number");
     int n = scn.nextInt();

      System.out.println("Enter value of k");
     int  k = scn.nextInt();
     
     //Count total no of digits in n
     int d=0;
     int temp=n;
     while(temp!=0)
     {
        d++;
        temp=temp/10;
     }
     
     k=k%d;
     if(k<0)
     {
         k=d+k;
     }
     // calculate 10^k
     int pow = (int)(Math.pow(10,k));
     
     
     // calculate a and b
     int a=0;
     int b=0;
     int ans=0;
    b = n%(pow);
    a = n/(pow);
    // calculate 10^(d-k)    
    int shift = (int)(Math.pow(10,d-k)); 
    
    
    ans = b*(shift)+a;
    System.out.println(ans);
    }
   }