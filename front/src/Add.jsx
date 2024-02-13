import { Box, Button, FormControl, TextField } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add=()=>{
    const navigate=useNavigate()

    const [name,SetName]=useState("")
    const [bday,SetBday]=useState("")
    const [Address,SetAddress]=useState("")
    const handleclick=(e)=>{
        const data={name:name,bday:bday,address:Address}
        
        fetch('http://localhost:3003/student',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)


        }).then(()=>{
            console.log("new added")
            navigate('/view')
        }).catch((error)=>{
            console.log(error)
            
        })
       

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
               
               variant="contained" type="submit" onClick={(e)=>{
                handleclick()
               }}>Add</Button>
            </FormControl>
        </Box>
    )
}
export default Add;