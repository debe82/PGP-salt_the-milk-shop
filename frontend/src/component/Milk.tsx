
"use client"

import { IMilk } from "../helper/models"


interface IMilktProps  {
  milk: IMilk
}

export default function Home({milk}: IMilktProps) {


return(
  <>
    <section>
      <div>id: {milk.id}</div>
      <div>name: {milk.name}</div>
      <div>type: {milk.type}</div>
      <div>storage: {milk.storage}</div>
    </section>
  </>

)

}