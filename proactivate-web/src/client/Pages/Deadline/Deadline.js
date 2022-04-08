import React from "react";
import { useEffect, useState } from "react";
import CustomizedProgressBars from "../../Components/ProgressBar.js";

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tasks from "./Tasks.js";
import Button from '@mui/material/Button';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import TextField from '@mui/material/TextField';




const deadlines = [{
  id: 0,
  Title: "",
  Status: false,
  Deadline: ""
}];

var selectRowProp = { 
  mode: "checkbox",
  clickToSelect: true,
  onSelect: onRowSelect
};

function onRowSelect(row, isSelected){
    var rowStr = "";
    for(var prop in row){
      console.log(prop)
       
    }
};



const Deadline = () => {
  const [dueDate,setDueDate] = useState(new Date().toLocaleString() + ""); 
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);
  const [tasks,setTasks] = useState(deadlines);

  const addTask = (title,status,dueDate) =>
  {
      setTasks((prevTasks)=>[
          ...prevTasks,
          {
            id: prevTasks.length +1,
            Title: title,
            Status: status,
            deadline: dueDate
          },
      ]);
  };

  function infoState()
  {
  console.log(title);
  console.log(dueDate);
  console.log(tasks);
  }
  const handleChange = (newValue) => {
    setDueDate(newValue);
  };

  return( 
  <>  
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
         value = {title}
         onChange = {(e)=>{setTitle(e.target.value);
        }}
         />


  <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Enter Due Date"
          value={dueDate}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />    
    </LocalizationProvider>

      <Button variant="outlined"
      onClick = {() => {infoState(); addTask(title,false,dueDate); console.log(tasks)}}
      >Submit</Button>

      </Box>

      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center"
  justifyContent="center">
        <Grid item md={4}>
          
        </Grid>
        <Grid item md={8} justifyContent="center">
          <Tasks title={title} status={done} dueDate = {dueDate}/>
          {/* <Tasks deadlines={deadlines}/> */}
        </Grid>
        {/* <Grid item md={1}>
          
        </Grid> */}
       
      </Grid>
    </Box> </>


  
   );
};

export default Deadline;
