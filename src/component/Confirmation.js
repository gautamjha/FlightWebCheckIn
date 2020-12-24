import React from 'react'
import {useLocation} from 'react'

const Confirmation=()=>{
    const location = useLocation();
    const{state}=location.state.params;
    const{formData} = state;
 return(
     <div>
       {formData.phoneNumber}
     </div>
 )
}
export default Confirmation