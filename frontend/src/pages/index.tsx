
import MilksContainer from '@/components/MilksContainer'
import SearchFilter from '@/components/SearchFilter'
import {useEffect, useState } from 'react'

export default function Home() {

  const [milkName, setMilkName] = useState("");
  const [milkTypes, setMilkTypes] = useState<string[]>(["All"]);


  useEffect(() => {

  }, [milkTypes])

  return (
    <>

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
