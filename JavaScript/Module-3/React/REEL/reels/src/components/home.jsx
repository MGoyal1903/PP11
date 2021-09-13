import { useContext } from "react";
import { auth } from "../firebase";

import { authContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";
import VideoCard from "./VideoCard";

import "./home.css";

let Home = () => {
  let user = useContext(authContext);
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="video-container">
        <VideoCard />
        <VideoCard />
      </div>

      <button
        className="home-logout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
