"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getMilks } from '../api/dataManagement';
import { IMilk } from '../helper/models';
import Milk from './Milk';
import { fillDb } from '@/helper/methods';
import { type } from 'os';


type MilkTypesProps = {
  types: string[]; //to change in array
  name: string;
};

export default function MilksContainer({types, name}: MilkTypesProps) {
  
  const [allMilks, setAllMilks] = useState([]);

  console.log("types: ", types);
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
        {
          allMilks.filter((milk: IMilk) => {
            if (types.length > 0) {
              return types.some((type: string) => {
                return milk.type.toLowerCase().includes(type.toLowerCase());
              })
            } else {
              return milk;
            }
          }).filter((m: IMilk) => m.name.toLowerCase().includes(name.toLowerCase())).map((fMilk: IMilk, index: number) => {
            return <Milk milk={fMilk} key={index}/>
          })
        }
      </>
  )
}