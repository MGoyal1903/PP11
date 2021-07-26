import java.io.*;
import java.util.*;

public class uppercase2lowercase {

	public static String toggleCase(String str){
		//write your code here
		String res = "";
		  for(int i=0;i<str.length();i++)
		  {
		      char ch = str.charAt(i);
		      if(ch>='a' && ch<='z')
		      {
		        //   char uc = (char)('A' + (ch - 'a'));
				  char uc = (char)(ch-32);
		          res = res + uc;
		      }
		      else if(ch>='A' && ch<='Z')
		      {
		          
		        //   char lc = (char)('a' + (ch - 'A'));
				  char lc = (char)(ch+32);
		          res = res + lc;
		      }
		  }

		return res;
	}
	public static void main(String[] args) {
		Scanner scn = new Scanner(System.in);
		String str = scn.next();
		System.out.println(toggleCase(str));
	}

}