import {Router, useRouter} from 'next/router'
import { useState } from 'react'

const MilkDetails = () => {

  const router = useRouter();
  const {id} = router.query;


  return (
    <>
      <h6>Hi {id}!</h6>
    </>
  )
}  

export default MilkDetails;