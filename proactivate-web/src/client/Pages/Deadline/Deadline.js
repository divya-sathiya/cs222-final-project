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
import axios from 'axios';

import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { auth } from "../../../server/config/firebase-config";
import {
  getAuth,
  onAuthStateChanged,
  getIdToken
} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGOJOMAARdo4ZPfFBpkHzfRezVurJJOXM",
  authDomain: "cs222project-343120.firebaseapp.com",
  projectId: "cs222project-343120",
  storageBucket: "cs222project-343120.appspot.com",
  messagingSenderId: "393335656297",
  appId: "1:393335656297:web:110e4b5fd6fa394e3db7f8",
  measurementId: "G-VR6EDJ7E41"
};

const Deadline = () => {
        const [title, setTitle] = useState("");
        const [dueDate,setDueDate] = useState(new Date());
        const [status,setStatus] = useState(false);
        const [tasks, setTasks] = useState([]);
        const [id,setId] = useState(0);
        const[time,setTime] =useState(0);     
        const [userToken,setUserToken] = useState("")
        const [selectionModel, setSelectionModel] = React.useState([]);
        
     
        const app = initializeApp(firebaseConfig);
        const [user,setUser] = useState([])
        const [UID,setUID] = useState("");
        const [tableData, setTableData] = useState([])

        useEffect(()=>
        {
          onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      },[]);

        useEffect(()=>
        {
            setTime(dueDate.getTime());
        },[dueDate]);
        

        useEffect(()=>{
         
          const user_json = JSON.stringify(user);
          const parsed_json = JSON.parse(user_json);
          const getUID = parsed_json.uid
          if(getUID != null)
          setUID(parsed_json.uid)
        
          var localUID = parsed_json.uid
          // console.log("UID: "+localUID)
          axios.get(`http://localhost:5000/deadline/get_stats/${localUID}`
        ).then((res) => {
          setTableData(res.data)
            // console.log("data"+ (res.data))
          })

        }, [user]);

        useEffect(()=>{
          axios.get(`http://localhost:5000/deadline/get_stats/${UID}`
          ).then((res) => {
              var data = JSON.stringify(res.data)
              setTasks(old => [...old,res]);
            setTableData(res.data)
              // console.log("data"+ (res.data))
            })
  
        }, [tasks]);
        
      
        const handleDelete = () =>
        {
          for (var i=0;i<selectionModel.length;i++)
          {
            
            var localId =  selectionModel[i]
            axios.delete(`http://localhost:5000/deadline/delete_stat/${localId}`)
          }
          axios.get(`http://localhost:5000/deadline/get_stats/${UID}`
          ).then((res) => {
              var data = JSON.stringify(res.data)
              setTasks(old => [...old,res]);
            setTableData(res.data)
            })
    
        }
        
        //submitTask calculates time, store in tasks array if triggered
        var submitTask = (e) =>
        {
            var date = dueDate
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0');
            var yyyy = date.getFullYear();
           
            date = mm + '/' + dd + '/' + yyyy;
            setId(id+1)
            // console.log(date)
            // console.log("UID: "+UID)
            let task = {
                "id": id+1,
                "title": title,
                "dueDate": date,
                "status": status,
                "time": time
            }
            let body = {
              uid: UID,
              deadline_id: id+1,
              name: title,
              date: date,
              complete: status,
              time: time
            }
            setTasks(old => [...old, task]);
            const res = axios.post("http://localhost:5000/deadline/add_stats", body
            );   
           
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
    <h4>Check and click the remove button when you completed your task!</h4>
    <div style={{ height: 750, width: '100%' }}>
      <DataGrid
       checkboxSelection
       onSelectionModelChange={(newSelectionModel) => {
         setSelectionModel(newSelectionModel);
       }}
       selectionModel={selectionModel}
        columns={[ { field: '_id', hide: true },
                    { field: 'uid', hide: true },
                    { field: 'assignment', headerName: 'Assignment Name', width: 300 }, 
                    { field: 'deadline_id', hide: true },
                  { field:'time_due', headerName:'Progress Bar', width: 700, renderCell: (params) => {
                    return(
                        <CustomizedProgressBars time={params.row.time_due}/>
                       
                        );
                  }
                 }, 
                  { field: 'due_date', headerName:'Due Date', width: 150 },
                  // { field: 'Delete', width:100, renderCell: (params) => {
                  //   return(
                      

                  //       <IconButton aria-label="delete" sx={{color:"white"}} size="small" onClick={() => handleDelete(params.row._id)} >
                  //           <DeleteIcon fontSize="small" />
                  //       </IconButton>);
                  // }
                //}
              ]}
        getRowId={(row) => row._id}
        rows={tableData}
        
       
      />


    </div> 
     <Button
     variant="outlined"
     onClick={() => {handleDelete()}}
   >
    Remove
   </Button>

    </>
    );

        
};

export default Deadline;