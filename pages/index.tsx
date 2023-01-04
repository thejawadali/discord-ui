import Head from 'next/head'
import Image from 'next/image'
import ChannelBlock from "../components/ChannelBlock"
import InboxBody from "../components/InboxBody"
import Sidebar from "../components/Sidebar"
import { AppProvider } from "../hooks/app.provider"

export default function Home() {
  return (
    <AppProvider>
      <div className="flex bg-[#36393F]">
        <Sidebar />
        <ChannelBlock />
        <InboxBody/>
      </div>
    </AppProvider>
  )
}
