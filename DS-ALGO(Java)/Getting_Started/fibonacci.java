import java.util.*;
public class fibonacci
{
    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter any number");
        int n = scn.nextInt();
        int first=0;
        int second=1;
        int third=0;
        for(int i=1;i<=n;i++)
        {
            System.out.println(first);
            third=first+second;
            first=second;
            second=third;
        }
    }
}