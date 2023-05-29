"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getMilks } from '../api/dataManagement';
import { IMilk } from '../helper/models';
import Milk from './Milk';

export default function MilksContainer() {
  
  
  const [allMilks, setAllMilks] = useState([]);


  const fetchData = async () => {
    const fetchedMilks = await getMilks().then(m => {return m});
    setAllMilks(fetchedMilks);
    
  } 
  
  console.log("all milks: ", allMilks);

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <>
        {allMilks.map((m: IMilk, index: number) => {
          return <Milk milk={m} key={index}/>
        })

        }
      </>
  )
}