import { IMilk, IMilkToBuy } from "@/utilities/models"
import CartItem from "./CartItem"


type CartProps = {
  cartItems: IMilkToBuy[]
}

export default function Cart({cartItems}: CartProps) {


  return (
    <>
      {
        cartItems.map((item, index: number) => {
          return (
            <section className="section__cartItem">
              <section>
                <label>{item.name}</label>
                <label>{item.type}</label>
              </section>
              <section>
                <label>{item.quantity}</label>
              </section>
            </section>
          )
        })
      }
    </>
  )

}