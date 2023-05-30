import { milkTypeList } from "@/helper/models";


type MilkNameProps = {
  setMilkTypes?: (newType: string[]) => void;
  setNameChange?: (newType: string) => void;
} 

export default function SearchFilter({setMilkTypes, setNameChange}: MilkNameProps) {

  const setType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const typeArr: string[] = []; 
    typeArr.push(e.target.value);
    setMilkTypes?.(typeArr);
  }

  return(
    <>
      <section className="section__selector">
        <input type="search" placeholder="Search..." onChange={(e) => setNameChange?.(e.target.value)}/>
        <select  onChange={(e)=> setType(e)} defaultValue={"All"}>
           {milkTypeList.map((type: string, index: number ) => 
            <option value={type} key={index}>{type}</option>
           )}
        </select>
      </section>
    </>
  )
}