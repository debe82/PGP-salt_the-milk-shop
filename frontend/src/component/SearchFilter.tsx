import { milkTypeList } from "@/helper/models";
import CustomSelect from "./CustomSelect";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type SearchFilterProps = {
  setMilkTypes?: (newType: string[]) => void;
  setNameChange?: (newType: string) => void;
} 

export default function SearchFilter({setMilkTypes, setNameChange}: SearchFilterProps) {
  /*
    const setType = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const typeArr: string[] = []; 
      typeArr.push(e.target.value);
      setMilkTypes?.(typeArr);
    }

    <select className="section__selector--search" onChange={(e)=> setType(e)} defaultValue={"All"}>
        {milkTypeList.map((type: string, index: number ) => 
        <option value={type} key={index}>{type}</option>
        )}
    </select>
  */
 

  return(
    <>
      <section className="section__selector">
        <input className="section__selector--search" type="search" placeholder="Search..." onChange={(e) => setNameChange?.(e.target.value)}/>

        <CustomSelect setMilkTypes={setMilkTypes}/>
      </section>
    </>
  )
}