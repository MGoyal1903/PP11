  public static int max(Node node)
  {
      if(node.right == null)
      {
          return node.data;
      }
      else
      {
          return max(node.right);
      }
  }

  public static Node remove(Node node, int data) {
    if(node == null)
    {
        return null;
    }
    if(data<node.data)
    {
        node.left = remove(node.left,data);
    }
    else if(data>node.data)
    {
        node.right = remove(node.right,data);
    }
    else
    {
        if(node.left == null && node.right == null) // leaf node
        {
            return null;
        }
        else if(node.left == null) // single child : right child exist
        {
            Node rep = node.right;
            node.right = null;
            return rep;
        }
        else if(node.right == null) // single child : left child exist
        {
            Node rep = node.left;
            node.left = null;
            return rep;
        }
        else // both child exist
        {
            int max = max(node.left);
            node.data = max;
            remove(node.left,max);
            return node;
        }
    }
}