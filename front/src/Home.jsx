import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Box><Typography variant="h1">Welcome to</Typography></Box>

            <Box><Typography variant="h3">Student Management System</Typography></Box>
            <Box sx={{display:'flex',flexDirection:'row',marginLeft:'160px'}}>
            
            <Link to="/add"><Button sx={{margin:'10px 10px'}} variant="contained">Add Student </Button></Link>
            <Link to="/view"><Button sx={{margin:'10px 10px'}} variant="contained">View Students </Button></Link>
        </Box>
        </Box>
    )
}
export default Home;