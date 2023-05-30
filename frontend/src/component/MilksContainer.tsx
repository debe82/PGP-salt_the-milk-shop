"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { IMilk } from '../helper/models';
import Milk from './Milk';
import { fillDb } from '@/helper/methods';



type MilkTypesProps = {
  types: string[]; //to change in array
  name: string;
  allMilks: IMilk[];
};

export default function MilksContainer({types, name, allMilks}: MilkTypesProps) {
  
  const [listOfTypes, setListOfTypes] = useState<string[]>([]);

  const updateTypes = () => {
    setListOfTypes(types)
  }

  useEffect(() => {
    //fillDb();
    updateTypes()
  }, [listOfTypes]);

  return (
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
  )
}