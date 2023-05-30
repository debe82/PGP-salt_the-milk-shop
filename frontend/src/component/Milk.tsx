
"use client"

import { IMilk } from "../helper/models"


interface IMilktProps  {
  milk: IMilk
}

export default function Home({milk}: IMilktProps) {


return(
  <>
    <section>
      <div>{milk.id}</div>
      <div>{milk.name}</div>
      <div>{milk.type}</div>
      <div>{milk.storage}</div>
    </section>
  </>

)

}