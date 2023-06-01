import Link from "next/link";
import { IMilk } from "../utilities/models"

interface IMilktProps  {
  milk: IMilk
}

export default function Home({milk}: IMilktProps) {

  return(
    <>
    <Link className="link__toDetails" href={`/products/${milk.id}`}>
      <section className="section--milk">
        <section className="section--milk__img">
          <img className="section--milk__img--milk" src="milk.png"></img>
        </section>
        <section className="section--milk--info">
          <h5 className="h--milk--info--name">{milk.name}</h5>
          <section className="h--milk_inner--info">
            <h6 className="h--milk--inner--info--type">{milk.type}</h6>
            <h6 className="h--milk--inner--info--storage">{milk.storage} liter</h6>
          </section>
        </section>
      </section>
    </Link>
    </>

  )

}