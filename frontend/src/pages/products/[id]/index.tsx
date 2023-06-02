import { getMilk, updateMilk } from '@/api/dataManagement';
import { IMilk } from '@/utilities/models';
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const MilkDetails = () => {

  const [value, setValue] = React.useState<number>(1);
  const [valueToString, setValueToString] = useState("");
  const [newStorageQuantity, setNewStorageQuantity] = useState(0);
  const router = useRouter();
  const {id} = router.query;

  const [milk, setMilk] = useState<IMilk>(
    { id: "", name: "", type: "", storage: 0}
  );


  const fetchData = async () => {
    console.log("fetchData");
    if (router.isReady) {
      const fetchedMilk: IMilk = await getMilk(id);
      console.log("fetchedMilk: ", fetchedMilk);
      setMilk(fetchedMilk);
      setNewStorageQuantity(fetchedMilk.storage);
    }    
  }
  

  const handleChange = async(val: number | number[]) => {
    setValueToString(val.toString());
    setValue(parseInt(valueToString));
  }

  const handleClick = async() => {
     
    const milkToUpdate: IMilk = {
      id: milk.id,
      name: milk.name,
      type: milk.type,
      storage: value
    }

    console.log("milkToUpdate:", milkToUpdate);

    const updatedStorage = await updateMilk(milkToUpdate)
    console.log("updatedStorage:", updatedStorage);
    setNewStorageQuantity(updatedStorage && updatedStorage.addedMilk && updatedStorage.addedMilk.storage);  
  }

  useEffect(() => {
    fetchData()
  }, [id, newStorageQuantity])

  return (
    <>

      <Head>
        <title>The Milk Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <section className='section__link--toHome'>
        <Link className="link--toHome" href={`../`}>
          <button className='button--toHome'> Back </button>
        </Link>
        <div></div>
        </section>

        <section className='section--prodDetails'>
          <section className='section--prodDetails__img--container'>
            <img className='section--prodDetails__img' src="../milk.png"></img>
          </section>

          <section className='section--prodDetails--info'>
            <section className='section--prodDetails--info--data'>
              <h5 className="h--milk--info--name">{milk.name}</h5>
              <h6 className="h--milk--inner--info--type">{milk.type}</h6>
              <h5 className="h--milk--inner--info--storage">{newStorageQuantity} liter</h5>
            </section>
            <section className='section--prodDetails--info--slider'>
            <Box width={100}>
                <Slider
                  defaultValue={1}
                  aria-label="Small"
                  valueLabelDisplay={"auto"}
                  min={1}
                  onChangeCommitted={(e, val) => handleChange(val)}
                  max={milk.storage}
                  color='primary'
                />
              </Box>
            </section>

            <section className='section--prodDetails--info--order'>
              <button className='section__button_order' onClick={handleClick}>Order</button>
            </section> 
          </section>

        </section>
      </section>

    </>
  )
}  

export default MilkDetails;