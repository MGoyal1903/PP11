import java.util.*;
  
  public class AnyBaseToDecimal{
  
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);
      int n = scn.nextInt();
      int b = scn.nextInt();
      int d = getValueIndecimal(n, b);
      System.out.println(d);
   }
  
   public static int getValueIndecimal(int n, int b){
      // write your code here
      int rem=0;
      int pos=0;
      int res=0;
      while(n!=0)
      {
          rem=n%10;
          
         int pow = (int)Math.pow(b,pos);
         res = res+(rem*pow);
         pos++;
         n=n/10;
          
      }
      return (res);
   }
  }