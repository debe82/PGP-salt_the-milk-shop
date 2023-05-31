import * as React from 'react';
import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { milkTypeList } from '@/helper/models';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

type CustomSelectProps = {
  setMilkTypes: (newType: string[]) => void;
}

export default function CustomSelect({setMilkTypes}: CustomSelectProps) {
  const [types, setTypes] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof types>) => {
    const {
      target: { value },
    } = event;
    setTypes(typeof value === 'string' ? value.split(',') : value);
  };

  setMilkTypes?.(types);

  return (
    <section className='customSelect'>
      <FormControl className='customSelect__FormControl' 
        sx={{ m: 0, 
          width: {
          xs: 110,   //0-599
          sm: 200,  //600-899
          md: 300,  //900-1199
          }, 
          height: {
            xs: 30, 
            sm: 30,
            md: 30,
          },  
          typography: {
            fontSize: 8,
          },
        
        }}
      >
      <InputLabel id="demo-multiple-checkbox-label">Milk Type</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={types}
          onChange={handleChange}
          input={<OutlinedInput label="Milk Type" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {milkTypeList.sort().map((type: string, index: number) => (
            <MenuItem key={index} value={type}>
              <Checkbox checked={types.indexOf(type) > -1} />
              <ListItemText primary={type} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </section>
  );
}