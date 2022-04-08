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
import { IconButton } from "@mui/material";

const Deadline = () => {
        const [title, setTitle] = useState("");
        const [dueDate,setDueDate] = useState("");
        const [status,setStatus] = useState(false);
        const [tasks, setTasks] = useState([]);
        const [id,setId] = useState(0);
        const[time,setTime] =useState(0);        
        
        var submitTask = (e) =>
        {
            e.preventDefault();
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
          '& > :not(style)': { m: 1, width: '25ch' },
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
        

        <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                label="Enter Due Date"
                value={dueDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                />    
        </LocalizationProvider>
        <IconButton  onClick={submitTask} color="primary" aria-label="upload picture" component="span">
                <AddIcon />
            </IconButton></Box>
        {/* <Button variant="outlined"
            // onClick={() => {submitTask(); console.log(tasks)}}
            onClick={submitTask}
        >Submit</Button>
    */}
        </Grid>
        <Grid item md>
         
        </Grid>
      </Grid>
    </Box>
       

        <table className="table is-striped is-fullwidth" id="tasksTable">
                <thead>
                    <tr>
                        <td></td>
                        <th>Assignment Name</th>
                        <th>Status</th>
                        <th>Progress Bar</th>
                        <th>Due Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task) => (
                        <tr key={ task.id }>
                            <td>{ task.title }</td>
                            <td>{ task.status }</td>
                            <td><CustomizedProgressBars time={task.time}/></td>
                            <td>{ task.dueDate }</td>
                        </tr>
                    )) }
                </tbody>
            </table>

        </>
        );
};

export default Deadline;