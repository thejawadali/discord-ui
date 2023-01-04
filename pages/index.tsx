import Head from 'next/head'
import Image from 'next/image'
import ChannelBlock from "../components/ChannelBlock"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <ChannelBlock />
    </div>
  )
}
