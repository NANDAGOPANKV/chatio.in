import React from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../config/firebase/Firebase";

export const Signin = () => {
  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(() => {
        console.log("Completed Task:1");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const style = {
    wrap: `flex justify-center `,
    btn:`w`
  };
  return (
    <div className={style.wrap}>
      <GoogleButton onClick={handleGoogleAuth} />
    </div>
  );
};
