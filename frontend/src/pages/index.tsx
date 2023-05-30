import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MilksContainer from '@/component/MilksContainer'
import SearchFilter from '@/component/SearchFilter'
import {useState } from 'react'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  const [milkName, setMilkName] = useState("");
  const [milkTypes, setMilkTypes] = useState<string[]>(["All"]);

  return (
    <>
      <Head>
        <title>The Milk Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home-main">
        <header className="home-header">
          THE MILK STORE
        </header>
        <SearchFilter 
          setNameChange={setMilkName} 
          setMilkTypes={setMilkTypes}
        />
        <MilksContainer types={milkTypes} name={milkName} />
        
      </main>
    </>
  )
}
