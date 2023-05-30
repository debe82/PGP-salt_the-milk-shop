
"use client"

import { IMilk } from "../helper/models"


interface IMilktProps  {
  milk: IMilk
}

export default function Home({milk}: IMilktProps) {


return(
  <>
    <section className="section--milk">
      <section className="section--milk__img">
        <img className="section--milk__img--milk" src="milk.png"></img>
      </section>
      <section className="section--milk--info">
        <h3 className="h--milk--info">{milk.name}</h3>
        <h4 className="h--milk--info">{milk.type}</h4>
        <h5 className="h--milk--info">{milk.storage}</h5>
      </section>
    </section>
  </>

)

}