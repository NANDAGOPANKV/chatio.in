import React from "react";
import { auth } from "../../config/firebase/Firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `fixed mt-[-4rem] text-gray-600 text-xs `,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full  `,
  recevid: `bg-[#e5e5a] text-black float-left rounded-bt-full  `,
};
export const Message = ({ messages }) => {
  const messageClass =
    messages.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.recevid}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        {/* <p className={style.name}>{messages?.name}</p> */}
        <p>{messages?.text}</p>
      </div>
    </div>
  );
};
