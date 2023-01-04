import React from "react";

function convertEpochToDateTime(epochTimestamp: number) {
  const date = new Date(epochTimestamp * 1000);

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

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
          <span className="text-xs text-gray-400">{convertEpochToDateTime(message.timeStamp)}</span>
        </div>
        <p className="text-gray-300 text-sm w-3/">{message.msgText}</p>
      </div>
    </div>
  );
}

export default BaseMessage;
