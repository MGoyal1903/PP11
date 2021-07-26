import java.util.*;
public class AnyBase2AnyBase {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the number");
        int n = scn.nextInt();
        System.out.println("Enter source Base");
        int sourceBase = scn.nextInt();
        System.out.println("Enter Destination Base");
        int  destBase= scn.nextInt();
        
        int result1 = AnyBaseToDecimal(n, sourceBase);
        int result2 = DecimalToAnyBase(result1, destBase);

        System.out.println("Ans : "+result2);
     }  
     
    public static int AnyBaseToDecimal(int n , int sourceBase) {

        int res = 0;
        int pos = 0;
        int rem = 0;
         while(n!=0)
         {
             rem = n%10;

             int pow = (int)Math.pow(sourceBase, pos);

             res = res + (rem*pow);
             pos++;
             n = n/10;
         }
        return res; 
        
    } 
    public static int DecimalToAnyBase(int n , int destBase)
    {
        int rem = 0;
        int res = 0;
        int pow = 1;

        while(n!=0)
        {
            rem = n % destBase;
            res = res +(rem*pow);
            pow = pow * 10;
            n = n / destBase;

        }
        return res;
    }
    
    
}
