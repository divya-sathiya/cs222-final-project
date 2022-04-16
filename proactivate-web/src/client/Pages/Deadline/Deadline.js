import React from "react";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import CustomizedProgressBars from "../../Components/ProgressBar";
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';

import { IconButton } from "@mui/material";



const Deadline = () => {
        const [title, setTitle] = useState("");
        const [dueDate,setDueDate] = useState(new Date());
        const [status,setStatus] = useState(false);
        const [tasks, setTasks] = useState([]);
        const [id,setId] = useState(0);
        const[time,setTime] =useState(0);        
        
        //making sure that time renders after calculation
        useEffect(()=>
        {
            setTime(dueDate.getTime());
        },[dueDate]);

        //submitTask calculates time, store in tasks array if triggered
        var submitTask = (e) =>
        {
            var date = dueDate
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0');
            var yyyy = date.getFullYear();
           
            date = mm + '/' + dd + '/' + yyyy;
            setId(id+1)
            console.log(date)
            let task = {
                "id": id+1,
                "title": title,
                "dueDate": date,
                "status": status,
                "time": time
            }
            setTasks(old => [...old, task]);
        }
        

        //saving the inputed due date to dueDate
        const handleChange = (newValue) => {
            setDueDate(newValue);
        }


   
    return(
        <>
        <Box md={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item md>
         
        </Grid>
        <Grid item md={6}>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
       >
        <TextField
                id="outlined-basic"
                label="Enter Assignment"
                variant="outlined"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                } }/>
        

        <LocalizationProvider  color = "primary" dateAdapter={AdapterDateFns}>
                <DateTimePicker
                color = "primary"
                label="Enter Due Date"
                value={dueDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                />    
        </LocalizationProvider>

        <IconButton  onClick={submitTask} sx={{color:"white"}} aria-label="upload picture" size="small">
                <AddIcon />
            </IconButton></Box>
       
        </Grid>
        <Grid item md>
         
        </Grid>
      </Grid>
    </Box>
       
    <div style={{ height: 750, width: '100%' }}>
      <DataGrid
        columns={[{ field: "title", headerName: 'Assignment Name', width: 300 }, 
                  { field:"time", headerName:'Progress Bar', width: 700, renderCell: (params) => {
                    return(
                        <CustomizedProgressBars time={params.row.time}/>);
                  }
                 }, 
                  { field: "dueDate", headerName:'Due Date', width: 150 },
                  { field: 'Delete', width:100, renderCell: () => {
                    return(
                        <IconButton aria-label="delete" sx={{color:"white"}} size="small" >
                            <DeleteIcon fontSize="small" />
                        </IconButton>);
                  }
                }]}
        rows={tasks}
      />
    </div> 
    </>
    );

        
};

export default Deadline;