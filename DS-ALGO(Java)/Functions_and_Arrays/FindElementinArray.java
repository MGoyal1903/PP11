import java.io.*;
import java.util.*;

public class FindElementinArray{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int arr[] = new int[n];
    for(int i=0;i<arr.length;i++)
    {
        arr[i]=scn.nextInt();
    }
    int x = scn.nextInt();
    int res = find(arr,x);
    System.out.println(res);
 }
 public static int find(int arr[] , int x)
 {
     for(int j=0;j<arr.length;j++)
     {
         if(arr[j]==x)
         {
             return j;
         }

     }
     return -1;
 }

}