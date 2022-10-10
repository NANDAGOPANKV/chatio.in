import React from "react";
import { auth } from "../../config/firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Signin } from "../auth/Signin";
import { SignOut } from "../auth/SignOut";

const style = {
  nav: `bg-gray-800 h-14 flex items-center justify-between p-4`,
  heading: `text-white font-bold text-2xl`,
};
export const NavBar = () => {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>CHATIO.IN</h1>
      {!user ? <Signin /> : <SignOut user={user?.displayName} />}
    </div>
  );
};
