import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MilksContainer from '@/component/MilksContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Milk Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home-main">
        <header className="home-header">
          The Milk Shop
        </header>
        <MilksContainer />
        
      </main>
    </>
  )
}
