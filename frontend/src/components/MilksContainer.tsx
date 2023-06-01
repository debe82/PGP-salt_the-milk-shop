"use client"

import { useEffect, useState } from 'react';
import { IMilk } from '../utilities/models';
import Milk from './Milk';
import { getMilks } from '@/api/dataManagement';
import { fillDb } from '@/utilities/methods';


type MilkTypesProps = {
  types: string[]; //to change in array
  name: string;
};

export default function MilksContainer({types, name}: MilkTypesProps) {
  
  const [listOfTypes, setListOfTypes] = useState<string[]>([]);
  const [allMilks, setAllMilks] = useState<IMilk[]>([]);


  const fetchData = async () => {
    console.log("fetchData");
    const fetchedMilks: IMilk[] = await getMilks();
    setAllMilks(fetchedMilks);
  }

  const updateTypes = () => {
    setListOfTypes(types)
  }

  useEffect(() => {
    fetchData();
    updateTypes()
  }, [listOfTypes]);

  return (
    <>
      <section className='section-products'>
        <h5>{allMilks.length} products </h5>
        
      </section>
      <section className='section__container--milk'>
        {
          allMilks.filter((milk: IMilk) => {
            if (types.length > 0) {
              return types.some((type: string) => {
                if (type === "All") {
                  return milk.type;
                } else {
                  return milk.type.toLowerCase().includes(type.toLowerCase());
                }  
              })
            } else {
              return milk;
            }
          }).filter((m: IMilk) => m.name.toLowerCase().includes(name.toLowerCase())).map((fMilk: IMilk, index: number) => {
            return <Milk milk={fMilk} key={index}/>
          })
        }
      </section>
    </>
  )
}