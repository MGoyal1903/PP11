import java.util.*;
public class DigitFrequency {
    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the number");
        int n = scn.nextInt();
        System.out.println("Enter the digit which you want to calculate the frequency in number");
        int d = scn.nextInt();

        int f = getDigitFrequency(n, d);
        System.out.println("count of  "+d+" in number is "+f);
    }
    public static int getDigitFrequency(int n, int d) {
        int count=0;
        while(n!=0)
        {
            int rem = n%10;
            n=n/10;

            if(d==rem)
            {
                count++;
            }
            else{

            }
        }
        return count;
    }
}
