import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

export interface IUser {
  id: number;
  name: string;
  online: boolean;
}

export const AppProvider = (props: any) => {
  const [users, _] = useState<IUser[]>([
    { name: "Alice", id: 1, online: true },
    { name: "Bob", id: 2, online: false },
    { name: "Charlie", id: 3, online: false },
    { name: "Dave", id: 4, online: false },
    { name: "Eve", id: 5, online: true },
    { name: "Frank", id: 6, online: false },
    { name: "Grace", id: 7, online: true },
    { name: "Henry", id: 8, online: true },
    { name: "Ivy", id: 9, online: false },
    { name: "Jenny", id: 10, online: true },
    { name: "Karen", id: 11, online: false },
  ]);

  const [openCP, setOpenCP] = useState<boolean>(true)

  const messages = [
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
      id: 111,
      userName: "Alice",
      msgText: "Hello, world!",
      timeStamp: 1623478219,
    },
    {
      id: 121,
      userName: "Bob",
      msgText: "Hi, Alice!",
      timeStamp: 1623478221,
    },
    {
      id: 131,
      userName: "Charlie",
      msgText: "Hello, everyone!",
      timeStamp: 1623478223,
    },
    {
      id: 141,
      userName: "Dave",
      msgText: "Hi, Charlie!",
      timeStamp: 1623478225,
    },
  ]

  const [activeUser, setActiveUser] = useState<IUser>({
    name: "Bob",
    id: 2,
    online: false,
  });

  return (
    <AppContext.Provider value={{ users, openCP, setOpenCP, setActiveUser, messages, activeUser }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppContext);
};
