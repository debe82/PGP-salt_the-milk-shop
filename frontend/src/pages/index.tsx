import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MilksContainer from '@/component/MilksContainer'
import SearchFilter from '@/component/SearchFilter'
import {useEffect, useState } from 'react'
import { IMilk } from '@/helper/models'
import { getMilks } from '@/api/dataManagement'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  const [milkName, setMilkName] = useState("");
  const [milkTypes, setMilkTypes] = useState<string[]>(["All"]);
  const [allProducts, setAllProducts] = useState<IMilk[]>([]);

  const fetchData = async () => {
    console.log("fetchData");
    const fetchedMilks: IMilk[] = await getMilks().then(m => {return m});
    setAllProducts(fetchedMilks);
  }


  useEffect(() => {
    fetchData();
  }, [milkTypes])

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
        <section>{allProducts.length}</section>
        <MilksContainer types={milkTypes} name={milkName} allMilks={allProducts}/>
        
      </main>
    </>
  )
}
