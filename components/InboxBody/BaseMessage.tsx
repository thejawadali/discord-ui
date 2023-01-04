import React from "react";

function BaseMessage({message}: any) {
  return (
    <div className="flex gap-x-3">
      <span className="flex items-center mt-1 justify-center w-8 h-8 text-lg rounded-full bg-gray-100">
        {message.userName.split("")[0]}
      </span>
      <div className="flex flex-col">
        {/* name */}
        <div className="flex text-white gap-x-3 items-center">
          <h1>{message.userName}</h1>
          <span className="text-xs text-gray-400">5:44 pm</span>
        </div>
        <p className="text-gray-300 text-sm w-3/">{message.msgText}</p>
      </div>
    </div>
  );
}

export default BaseMessage;
