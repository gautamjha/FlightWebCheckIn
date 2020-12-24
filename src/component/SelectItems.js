import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
const SelectItems=(props)=>{
    return props.map((item)=>(
       <MenuItem value={item.name}>
       <em>{item.name}</em>
     </MenuItem>
     ))
   }

   export default SelectItems