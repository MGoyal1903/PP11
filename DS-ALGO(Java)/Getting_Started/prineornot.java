import java.util.*;
public class prineornot
{
    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter any number");
        int n = scn.nextInt();
        int count=0;
        for(int i=1;i<=n;i++)
        {
            if(n%i==0)
            count++;
        }
        if(count==2)
        {
            System.out.println("prime");
        }
        else{
            System.out.println("not prime");
        }
    }
}

// optimezed than 1 
// it runs from 2 - n/2

// import java.util.*;
// public class prineornot
// {
//     public static void main(String[] args)
//     {
//         Scanner scn = new Scanner(System.in);
//         System.out.println("Enter any number");
//         int n = scn.nextInt();
//         boolean isprime=true;
//         for(int i=2;i<=n/2;i++)
//         {
//             if(n%i==0)
//             isprime=false;
//             break;
//         }
//         if(isprime=true)
//         {
//             System.out.println("prime");
//         }
//         else{
//             System.out.println("not prime");
//         }
//     }
// }




// more optimized than both
// it runs from 2 - sqrt(n)

// import java.util.*;
// public class prineornot
// {
//     public static void main(String[] args)
//     {
//         Scanner scn = new Scanner(System.in);
//         System.out.println("Enter any number");
//         int n = scn.nextInt();
//         int count=0;
//         for(int i=2;i*i<=n;i++)
//         {
//             if(n%i==0)
//             count++;
//         }
//         if(count==2)
//         {
//             System.out.println("prime");
//         }
//         else{
//             System.out.println("not prime");
//         }
//     }
// }