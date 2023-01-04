import React from "react";
import { Users as UserIcon, Plus } from "tabler-icons-react";
import { IUser, useAppStore } from "../hooks/app.provider"

function ChannelBlock() {
  const appStore = useAppStore()

  return (
    <div className="bg-[#2f3136] left-[70px] inset-y-0 w-64 h-screen pt-10 fixed px-2">
      <UserButton text="Friends">
        <UserIcon className="w-5 h-5" />
      </UserButton>
      <div className="mt-4 hover:text-gray-300 text-gray-400 flex text-sm items-center justify-between mx-4">
        <span>Direct Messages</span>
        <Plus className="w-4 h-4" />
      </div>
      <div className="space-y-1 overflow-y-auto">
        {appStore.users.map((user: IUser) => (
          <UserButton onClick={() => appStore.setActiveUser(user)} key={user.id} text={user.name} active={user.id === appStore.activeUser.id}>
            <span className="inline-block relative h-7 w-7 rounded-full bg-gray-100">
              <span className="text-xs font-medium leading-none text-gray-800">
                {user.name.split("")[0]}
              </span>
              {user.online && (
                <span className="absolute bottom-0 right-0 block h-2 w-2 z-20 rounded-full bg-green-600 ring-2 group-hover:ring-[#36393F] ring-[#2f3136]" />
              )}
            </span>
          </UserButton>
        ))}
      </div>
    </div>
  );
}

export default ChannelBlock;

interface userButtonProps {
  children: any;
  text?: string;
  active?: boolean;
  onClick?: any
}

const UserButton = ({onClick, children, text, active }: userButtonProps) => (
  <button onClick={onClick}
    className={`flex group text-gray-400 ${
      active
        ? "text-gray-300 gap-x-2 bg-[#36393F]"
        : "hover:text-gray-300 gap-x-2 hover:bg-[#36393F]"
    }  duration-200 transition-all items-center w-full py-2 rounded px-4`}
  >
    {children}
    <span>{text}</span>
  </button>
);
