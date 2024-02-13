import { Box,Button, FormControl, TextField } from "@mui/material";
import { UpdateContext } from "./UpdateContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit=()=>{
    const navigate=useNavigate()
    const {select,SetSelect}=useContext(UpdateContext)
    const [name,SetName]=useState(select.name)
    const [bday,SetBday]=useState(select.Bday)
    const [Address,SetAddress]=useState(select.Address)


    const handlupdate=async(id,data)=>{
        try{
          await axios.put(`http://localhost:3003/student/${id}`,data)
          navigate('/view')
         
  
  
        }catch(err){
          console.log(err.data)
        }
  
      }
  
    
    return(
        <Box>
            <FormControl>
               <Box sx={{margin:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
               <label>Name</label>
                <TextField value={name} onChange={(e)=>{
                    SetName(e.target.value)
                    
                }}
                inputProps={{ style: { color: 'white' } }} 
                ></TextField>
               </Box>
                <Box sx={{margin:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <label>Birth day</label>
                <TextField value={bday} onChange={(e)=>{
                    SetBday(e.target.value)
                }}
                inputProps={{ style: { color: 'white' } }} 
                ></TextField>
                </Box>
               <Box sx={{margin:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
               <label>Address</label>
                <TextField  value={Address} inputProps={{ style: { color: 'white' } }}  onChange={(e)=>{
                    SetAddress(e.target.value)
                }}></TextField>
               
               </Box>
               <Button 
               disabled={(name===""||bday===""||Address===""?true:false)}
                variant="contained" type="submit" onClick={()=>{
                handlupdate(select.id,{name:name,bday:bday,address:Address})

               }}>update</Button>
            </FormControl>
        </Box>
    )
}
export default Edit;