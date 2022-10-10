import React, { useLayoutEffect, useRef, useState } from "react";
import { Message } from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase/Firebase";
import { SendMessages } from "./SendMessages";

const style = {
  main: `flex flex-col p-[10px] relative  overflow-y-scroll  mb-16 scroll-smooth`,
};
export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useLayoutEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unSubscribed = onSnapshot(q, (querySnapShot) => {
      let messages = [];
      querySnapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      return () => {
        unSubscribed();
      };
    });
  }, [messages]);
  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((data, index) => {
            return <Message key={index} messages={data} />;
          })}
      </main>
      {/* send messages component */}
      <SendMessages scroll={scroll} />
      {/* send messages component */}
      <span ref={scroll}></span>
    </>
  );
};
