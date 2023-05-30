
"use client"

import { IMilk } from "../helper/models"


interface IMilktProps  {
  milk: IMilk
}

export default function Home({milk}: IMilktProps) {


return(
  <>
    <section className="section--milk">
      <section>
        <img src="../assets/milk.png"></img>
      </section>
      <section>
        <div>name: {milk.name}</div>
        <div>type: {milk.type}</div>
        <div>storage: {milk.storage}</div>
      </section>
    </section>
  </>

)

}