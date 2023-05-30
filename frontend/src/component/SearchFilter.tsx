

type MilkNameProps = {
  setMilkTypes?: (newType: string[]) => void;
  setNameChange?: (newType: string) => void;
} 

export default function SearchFilter({setMilkTypes, setNameChange}: MilkNameProps) {

  const setType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const typeArr: string[] = []; 
    typeArr.push(e.target.value);
    console.log("typeArr:", typeArr);
    setMilkTypes?.(typeArr);
  }

  return(
    <>
      <section className="section__selector">
        <input type="search" placeholder="Search..." onChange={(e) => setNameChange?.(e.target.value)}/>
        <select  onChange={(e)=> setType(e)}>
            <option value="Pea">Pea</option>
            <option value="Rice">Rice</option>
            <option value="Coconut">Coconut</option>
        </select>
      </section>
    </>
  )
}