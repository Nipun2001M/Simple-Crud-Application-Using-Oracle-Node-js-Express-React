import { Box, Button, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, selectClasses } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { UpdateContext } from "./UpdateContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const View=()=>{
    const navigate=useNavigate()

 
  
    const {select,SetSelect}=useContext(UpdateContext)
    const [users,setUsers]=useState([])
    const fetchdata=async()=>{
      try{
        const response=await axios.get('http://localhost:3003/student')
        setUsers(response.data)





      }catch(err){
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.reponse.headers)
        }else{
          console.log('error')

        }
       

      }


    }
    
    useEffect(()=>{
     
      fetchdata()


    },[])

    const handledelete=async(id)=>{
      try{
        await axios.delete(`http://localhost:3003/student/${id}`)
        fetchdata()


      }catch(err){
        console.log(err.data)
      }

    }


    return(
        
         <Box>
          <Box sx={{display:'flex',justifyContent:'flex-start',marginBottom:'10px'}}>
          <Button variant="contained"  onClick={()=>{
            navigate('/add')
          }}>AddUser</Button>
          </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address </TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Action</TableCell>
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{user.name}</TableCell>
              <TableCell align="right">{user.Address}</TableCell>
              <TableCell align="right">{user.Bday}</TableCell>
              <TableCell align="right"><Box>
                <Link to='/edit'><Button onClick={()=>{
                  SetSelect(user)
                }} ><BorderColorIcon/></Button></Link>
                <Button onClick={()=>{
                  handledelete(user.id)
                }}>
                <DeleteIcon/></Button>
                </Box></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
    )
}
export default View;