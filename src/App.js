import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { auth } from "./config/firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Chat } from "./components/chat/Chat";

export const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const style = {
    appContainer: `max-w-[750px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-[86vh] bg-gray-300 mt-6 shadow-xl relative border rounded `,
  };
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* NavBar */}
        <NavBar />
        {/* NavBar */}
        {/* Chat Component */}
        {user ? <Chat /> : null}
        {/* Chat Component */}
      </section>
      <span>CHATIO</span>
    </div>
  );
};
