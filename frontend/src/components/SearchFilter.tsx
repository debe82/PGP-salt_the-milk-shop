import { milkTypeList } from "@/utilities/models";
import CustomSelect from "./CustomSelect";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

type SearchFilterProps = {
  setMilkTypes: (newType: string[]) => void; //function prop
  setNameChange: (newType: string) => void;
} 

export default function SearchFilter({setMilkTypes, setNameChange}: SearchFilterProps) {

  const [types, setTypes] = useState<string[]>([]);

  return(
    
      <section className="section__selector">
        <input className="section__selector--search" type="search" placeholder="Search..." onChange={(e) => setNameChange(e.target.value)}/>

        <CustomSelect setMilkTypes={setMilkTypes}/>
      </section>
    
  )
}