import Head from 'next/head'
import MilksContainer from '@/component/MilksContainer'
import SearchFilter from '@/component/SearchFilter'
import {useEffect, useState } from 'react'

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
