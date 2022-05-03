import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Dashboard.css";
import ToDoItem from "../../Components/ToDoItem";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { auth } from "../../../server/config/firebase-config";
import {
    onAuthStateChanged,
    getAuth
  } from "firebase/auth";
import axios from 'axios';


const label = { inputProps: { "aria-label": "demo" } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Dashboard = () => {
    const [profPic,setProfPic] = useState("/broken-image.jpg")
    const [user,setUser] = useState([])
    const [UID,setUID] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinute] = useState(0);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

   
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    useEffect(() => {
        console.log("user: " + JSON.stringify(user))
        const user_json = JSON.stringify(user);
        
        const parsed_json = JSON.parse(user_json);
        const getProfPic = parsed_json.photoURL

    
        if(getProfPic != null)
        setProfPic(parsed_json.photoURL)
        
    
        console.log("prof:" + profPic)

        const getUID = parsed_json.uid
        if(getUID != null)
        setUID(parsed_json.uid)
      });
    
      useEffect(()=>{
        console.log("BEFORE axios" + UID); //UID is printed our
        axios.get(`http://localhost:5000/time/get_total/${UID}`
        ).then((res) => {
            var data = JSON.stringify(res.data);
            var parsed_data = JSON.parse(data);
            console.log("parse data" + res.data); 
          })
      }, );

      
      



  return (
<>
<Box sx={{ flexGrow: 1 }} >
      <Grid container  justify="center" spacing={2} columns={16}>
        <Grid  justify="center" item xs={8}>
            <div className ="userInfo">
                  <Stack direction="row" spacing={2}  style={{paddingBottom: 50}}  >
                      <Avatar 
                      sx={{ width: 300, height: 300 }}
                      alt="/broken-image.jpg"
                      src={profPic}
                    />
                  </Stack>

                  <div className="information">
                      <h4>Total Studying Time: 4h 36m</h4>
                      <h4>Task for today:</h4>
                      <ToDoItem/>
                  </div>  
                  </div>            
                  </Grid>
    

                  <Grid item xs={8}>
                    <div className="cards" style={{ padding: 23 }}>
                   

                    <Stack spacing={3}>
                    <Card sx={{ maxWidth: 500 }} >
                      <CardActionArea>
                          <Link
                              style={{ textDecoration: "none", color: "black"}}
                              to="/Schedule"
                          >
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="/images/photo1.jpeg"
                                  alt="Schedule" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div" style={{color: '#055458'}}>
                                      Schedule
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      Schedule your week while creating your own to-do lists!
                                  </Typography>
                              </CardContent>
                          </Link>
                      </CardActionArea>
                      </Card>

                      <Card sx={{ maxWidth: 500 }} >
                      <CardActionArea>
                          <Link
                              style={{ textDecoration: "none", color: "black" }}
                              to="/Deadline"
                          >
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="/images/photo2.jpeg"
                              
                                  alt="Deadline" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div" style={{color: '#055458'}}>
                                      Deadlines
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      See and keep track of your assignments and deadlines!
                                  </Typography>
                              </CardContent>
                          </Link>
                      </CardActionArea>
                      </Card>


                      <Card sx={{ maxWidth: 500 }} >
                      <CardActionArea>
                          <Link style={{ textDecoration: "none", color: "black" }} to="/Timer">
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="/images/photo3.jpeg"
                                  alt="Timer" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div" style={{color: '#055458'}}>
                                      Timer
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      It's study time with our Pomodoro Timer!
                                  </Typography>
                              </CardContent>
                          </Link>
                      </CardActionArea>
                      </Card>
                      </Stack>

                 
                  </div>
                  </Grid>
                  </Grid>
    </Box>
   
    </>
  );
};
export default Dashboard;
