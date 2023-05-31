import { getMilk } from '@/api/dataManagement';
import { IMilk } from '@/helper/models';
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';


const MilkDetails = () => {

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
    }    
  }

  useEffect(() => {
    fetchData()
  }, [id])

  console.log("milk: ", milk.id);

  return (
    <>

      <Head>
        <title>The Milk Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="home-header">
        THE MILK STORE
      </header>

      <section>
        <section className='link__toHome'>
        <Link className="link__toDetails" href={`../`}>
          <label> Back </label>
        </Link>
        </section>
        <section>


        </section>
      </section>

      <h6>Hi {milk.id}!</h6>
      <h6>Hi {milk.name}!</h6>
      <h6>Hi {milk.type}!</h6>
      <h6>Hi {milk.storage}!</h6>
    </>
  )
}  

export default MilkDetails;