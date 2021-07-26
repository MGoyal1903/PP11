import java.util.*;
  
  public class Countdigits{
  
  public static void main(String[] args) {
    // write your code here  
    Scanner scn = new Scanner(System.in);
    System.out.println("Enter number");
    int n = scn.nextInt();
    
    int count=0;
    
    while(n!=0)
    {
    count++;
    n=n/10;
    }
    System.out.println(count);
   }
  }