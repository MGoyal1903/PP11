import java.util.*;
    
    public class printdigits{
    
    public static void main(String[] args) {
      // write your code here  
      Scanner scn = new Scanner(System.in);
      System.out.println("Enter number");
      int n = scn.nextInt();
      int d=0;
      int temp=n;
      while(temp!=0)
      {
          d++;
          temp=temp/10;
      }
      int pow=1;
      int i=0;
      while(i<(d-1))
      {
          pow=pow*10;
          i++;
      }
      while(pow!=0)
      {
          int ld = n/pow;
          System.out.println(ld);
          n=n%pow;
          pow=pow/10;
      }
     }
    }