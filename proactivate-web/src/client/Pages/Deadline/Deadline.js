import React from "react";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import CustomizedProgressBars from "../../Components/ProgressBar";
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { IconButton } from "@mui/material";

var tableStyle=
{
    "color" :"white",
    "width": "100%",
    "table-layout": "fixed"
};

var headStyle=
{
    "margin-top": "3%",
    "margin-bottom": "3%",
    "border-bottom":"0.6px solid white"
};



const Deadline = () => {
        const [title, setTitle] = useState("");
        const [dueDate,setDueDate] = useState("");
        const [status,setStatus] = useState(false);
        const [tasks, setTasks] = useState([]);
        const [id,setId] = useState(0);
        const[time,setTime] =useState(0);        
        
        var submitTask = (e) =>
        {
            var date = dueDate
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0');
            var yyyy = date.getFullYear();
            var Time = date.getTime();
            date = mm + '/' + dd + '/' + yyyy;
            setTime(Time);
            let task = {
                "id": id+1,
                "title": title,
                "dueDate": date,
                "status": status,
                "time": time
            }
            setTasks(old => [...old, task]);

        }

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
       

        <table style={tableStyle}>
                <thead style={headStyle}>
                    <tr>
                        <th>Assignment Name</th>          
                        <th>Progress Bar</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task) => (
                        <tr key={ task.id }>
                            <td width={"30%"}>{ task.title }</td>
                            <td width={"50%"}><CustomizedProgressBars time={task.time}/></td>
                            <td width={"15%"}>{ task.dueDate }</td>
                            <td width={"5%"}>
                                <IconButton aria-label="delete" sx={{color:"white"}} size="small">
                                        <DeleteIcon fontSize="small" />
                                </IconButton>
                            </td>

                        </tr>
                    )) }
                </tbody>
            </table>

        </>
        );
};

export default Deadline;