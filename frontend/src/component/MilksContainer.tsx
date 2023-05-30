"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getMilks } from '../api/dataManagement';
import { IMilk } from '../helper/models';
import Milk from './Milk';
import { fillDb } from '@/helper/methods';

export default function MilksContainer() {
  
  
  const [allMilks, setAllMilks] = useState([]);


  const fetchData = async () => {
    console.log("fetchData");
    const fetchedMilks = await getMilks().then(m => {return m});
    setAllMilks(fetchedMilks);
    
  } 

  useEffect(() => {
    //fillDb();
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