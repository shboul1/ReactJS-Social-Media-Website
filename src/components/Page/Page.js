import React, { useContext, useState } from "react";
import Signinbtn from "../SignIn-Btn/Signinbtn";
import AllPosts from '../AllPosts/AllPosts'
import { UserContext } from "../Context/userContext";
import CreatePost from "../CreatePost/CreatePost";
import "./Page.css";
import Skeleton from "../Skeleton/Skeleton";

const Page = () => {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <>
    <div id='override-bootstrap' className="page" style={{ textAlign: "center", paddingTop: "20px" }}>
      {user ? ( <CreatePost /> ) : (
        <div className="sign-in">
          <Signinbtn />
          <p style={{ marginLeft: "10px" }}>To Post & Comment</p>
        </div>
      )}
      <AllPosts />
    </div>
    
    </>
  );
};

export default Page;
