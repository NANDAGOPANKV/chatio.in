import React from "react";
import { auth } from "../../config/firebase/Firebase";
import { signOut } from "firebase/auth";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-50 font-bold`,
  username: `text-gray-300`,
};
export const SignOut = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth);
    console.log("Signing Out");
  };
  return (
    <>
      <p className={style.username}>{user}</p>
      <button onClick={() => handleSignOut()} className={style.button}>
        LogOut
      </button>
    </>
  );
};
