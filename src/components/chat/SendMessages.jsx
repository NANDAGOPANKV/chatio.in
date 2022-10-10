import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../config/firebase/Firebase";

const style = {
  form: `h-14 w-full max-w-[720px] flex text-xl absolute bottom-1`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded`,
  btn: `w-[20%]  bg-slate-200 `,
};
export const SendMessages = ({ scroll }) => {
  const [input, setInput] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Sorry Can't Sent Messages , Enter Something");
    } else {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        timestamp: serverTimestamp(),
        uid,
      });
      setInput("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form onSubmit={handleSendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Messages"
      />
      <button className={style.btn} type="submit">
        Send
      </button>
    </form>
  );
};
