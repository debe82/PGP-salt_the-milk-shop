"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getMilks } from '../api/dataManagement';
import { IMilk } from '../helper/models';
import Milk from './Milk';
import { fillDb } from '@/helper/methods';


type MilkTypesProps = {
  //types: string; //to change in array
  name: string;
};

export default function MilksContainer({name}: MilkTypesProps) {
  
  
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
        {allMilks.filter((milk: IMilk) => milk.name.includes(name)).map((fMilk: IMilk, index: number) => {
          return <Milk milk={fMilk} key={index}/>
        })

        }

        {//allMilks.map((m: IMilk, index: number) => {
          //return <Milk milk={m} key={index}/>
        //})

        }
      </>
  )
}