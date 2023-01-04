import { Fragment, useEffect, useState } from "react";
import { Users as UsersIcon, User, Search } from "tabler-icons-react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { useAppStore, IUser } from "../hooks/app.provider";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function CommandPallete() {
  const appStore = useAppStore();
  const [query, setQuery] = useState("");


  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        appStore.setOpenCP((v: boolean)=> !v)
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [])

  const recent = [appStore.users[0]];
  const filteredPeople =
    query === ""
      ? []
      : appStore.users.filter((person: IUser) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={appStore.openCP}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={appStore.setOpenCP}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto mt-52 max-w-xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-[#2f3136] shadow-2xl transition-all">
              <Combobox
                onChange={(person: IUser) => {appStore.setActiveUser(person); appStore.setOpenCP(false)}}
              >
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 outline-none w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === '' || filteredPeople.length > 0) && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
                  >
                    <li className="p-2">
                      <ul className="text-sm text-gray-400">
                        {(query === "" ? recent : filteredPeople).map(
                          (person: IUser) => (
                            <Combobox.Option
                              key={person.id}
                              value={person}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-md px-3 py-2",
                                  active && "bg-[#202225] text-white"
                                )
                              }
                            >
                              {person.name}
                            </Combobox.Option>
                          )
                        )}
                      </ul>
                    </li>
                  </Combobox.Options>
                )}

                {query !== "" && filteredPeople.length === 0 && (
                  <div className="py-14 px-6 text-center sm:px-14">
                    <UsersIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-200">
                      Can not found what you are looking for ?
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
