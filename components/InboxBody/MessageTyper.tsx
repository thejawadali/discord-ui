import React from "react";
import { Plus } from "tabler-icons-react";

function MessageTyper() {
  return (
    <div className="inset-0 sticky bg-[#36393F]">
      <div className="h-12 px-3 bg-[#202225] flex items-center justify-between shadow-lg rounded-lg mb-4 mx-4">
        <button className="bg-gray-200 p-0.5 rounded-full">
          <Plus className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Message"
          className="w-full outline-none border-none h-full mx-3 bg-transparent placeholder-gray-500 text-white text-sm font-normal"
        />
      </div>
    </div>
  );
}

export default MessageTyper;
