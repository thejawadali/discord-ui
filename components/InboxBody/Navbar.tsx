import React from "react";
import { PhoneCall, Video, Pin, UserPlus, Search, Inbox, QuestionMark } from "tabler-icons-react";
import { useAppStore } from "../../hooks/app.provider"

function Navbar() {
  const appStore = useAppStore()
  return (
    <div className="w-full sticky inset-0 bg-[#36393F] py-3 px-5 border-b border-gray-900 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <span className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-100">
            {appStore.activeUser.name.split("")[0]}
        </span>
        <h1 className="text-white">{appStore.activeUser.name}</h1>
        {appStore.activeUser.online && <span className="w-2 h-2 rounded-full bg-green-600" />}
      </div>
      {/* icons */}
      <div className="text-gray-400 flex items-center gap-x-3">
        <PhoneCall />
        <Video />
        <Pin />
        <UserPlus />
        <div className="flex items-center justify-center bg-[#202225] rounded overflow-hidden p-1">
          <input type="text" className="bg-transparent outline-none border-none text-sm w-24" placeholder="Search" />
          <Search className="w-4 h-4" />
        </div>
        <Inbox />
        <QuestionMark className="text-gray-600 rounded-full w-5 h-5 bg-gray-200" />
      </div>
    </div>
  );
}

export default Navbar;
