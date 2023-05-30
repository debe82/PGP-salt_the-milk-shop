

type MilkNameProps = {
  setNameChange?: (newType: string) => void;
} 

export default function SearchFilter({setNameChange}: MilkNameProps) {

  return(
    <>
      <section className="section__selector">
        <input type="search" placeholder="Search..." onChange={(e) => setNameChange?.(e.target.value)}/>
        <select>
            <option value="js">type1</option>
            <option value="html">type2</option>
            <option value="css">type3</option>
        </select>
      </section>
    </>
  )
}