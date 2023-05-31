import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MilksContainer from '@/component/MilksContainer'
import SearchFilter from '@/component/SearchFilter'
import {useEffect, useState } from 'react'
import { IMilk } from '@/helper/models'
import { getMilks } from '@/api/dataManagement'
import { fillDb } from '@/helper/methods'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  const [milkName, setMilkName] = useState("");
  const [milkTypes, setMilkTypes] = useState<string[]>(["All"]);


  useEffect(() => {

  }, [milkTypes])

  return (
    <>
      <Head>
        <title>The Milk Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="home-header">
        THE MILK STORE
      </header>
      <main className="home-main">
        <SearchFilter 
          setNameChange={setMilkName} 
          setMilkTypes={setMilkTypes}
        />

        <MilksContainer types={milkTypes} name={milkName}/>
        
      </main>
    </>
  )
}
