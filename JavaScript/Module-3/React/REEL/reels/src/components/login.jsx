import { useContext, } from "react";
import { signInWithGoogle, } from "../firebase";
import { authContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";

let Login = () => {
  let user = useContext(authContext);

  return (
    <>
      {user ? <Redirect to="/" /> : ""}
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        class="btn btn-outline-success m-4"
      >
        Login with Google
      </button>
    </>
  );
};

export default Login;
