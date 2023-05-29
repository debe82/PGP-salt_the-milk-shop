"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getMilks } from '../api/dataManagement';

export default function App() {
  
  
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
      <></>
  )
}