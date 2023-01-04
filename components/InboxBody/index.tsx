import React from "react";
import { useAppStore } from "../../hooks/app.provider"
import BaseMessage from "./BaseMessage";
import MessageTyper from "./MessageTyper"
import Navbar from "./Navbar";


function InboxBody() {
  const appStore = useAppStore()
  return (
    <div className="ml-[326px] w-full min-h-screen">
      <Navbar />
      {/* body */}
      <div className="mt-3 mb-8 mx-5 m space-y-4 overflow-auto">
        {appStore.messages.map((msg: any) => (
          <BaseMessage key={msg.id} message={msg}></BaseMessage>
        ))}
      </div>
      <MessageTyper />
    </div>
  );
}

export default InboxBody;
