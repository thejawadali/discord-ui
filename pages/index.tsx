import Head from 'next/head'
import Image from 'next/image'
import ChannelBlock from "../components/ChannelBlock"
import InboxBody from "../components/InboxBody"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex bg-[#36393F]">
      <Sidebar />
      <ChannelBlock />
      <InboxBody/>
    </div>
  )
}
