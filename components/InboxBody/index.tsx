import React from "react";
import BaseMessage from "./BaseMessage";
import MessageTyper from "./MessageTyper"
import Navbar from "./Navbar";


function InboxBody() {
  const msgs = [
    {
      id: 1,
      userName: "Alice",
      msgText: "Hello, world!",
      timeStamp: 1623478219,
    },
    {
      id: 2,
      userName: "Bob",
      msgText: "Hi, Alice!",
      timeStamp: 1623478221,
    },
    {
      id: 3,
      userName: "Charlie",
      msgText: "Hello, everyone!",
      timeStamp: 1623478223,
    },
    {
      id: 4,
      userName: "Dave",
      msgText: "Hi, Charlie!",
      timeStamp: 1623478225,
    },
    {
      id: 5,
      userName: "Eve",
      msgText: "Hello, Dave!",
      timeStamp: 1623478227,
    },
    {
      id: 6,
      userName: "Zach",
      msgText: "Hi, everyone!",
      timeStamp: 1623478269,
    },
    {
      id: 11,
      userName: "Alice",
      msgText: "Hello, world!",
      timeStamp: 1623478219,
    },
    {
      id: 12,
      userName: "Bob",
      msgText: "Hi, Alice!",
      timeStamp: 1623478221,
    },
    {
      id: 13,
      userName: "Charlie",
      msgText: "Hello, everyone!",
      timeStamp: 1623478223,
    },
    {
      id: 14,
      userName: "Dave",
      msgText: "Hi, Charlie!",
      timeStamp: 1623478225,
    },
    {
      id: 15,
      userName: "Eve",
      msgText: "Hello, Dave!",
      timeStamp: 1623478227,
    },
    {
      id: 16,
      userName: "Zach",
      msgText: "Hi, everyone!",
      timeStamp: 1623478269,
    },
  ];
  return (
    <div className="ml-[326px] w-full min-h-screen">
      <Navbar />
      {/* body */}
      <div className="mt-3 mb-8 mx-5 m space-y-4 overflow-auto">
        {msgs.map((msg) => (
          <BaseMessage key={msg.id} message={msg}></BaseMessage>
        ))}
      </div>
      <MessageTyper />
    </div>
  );
}

export default InboxBody;
