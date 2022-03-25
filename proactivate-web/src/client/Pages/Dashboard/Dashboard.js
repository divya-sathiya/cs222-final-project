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
import Image from "mui-image";
import Deadline from "../Deadline/Deadline";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const label = { inputProps: { "aria-label": "demo" } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Dashboard = () => {
  return (
<>
    
<Box sx={{ flexGrow: 1 }} >
      <Grid container  justify="center" spacing={2} columns={16}>
        <Grid  justify="center" item xs={8}>
            <div className ="userInfo">
                  <Stack direction="row" spacing={2}>
                      <Avatar sx={{ width: 200, height: 200 }} />
                  </Stack>

                  <div className="information">
                      <p>Total Studying Time: 4h 36m</p>
                      <p>Task for today:</p>
                      <ToDoItem />
                  </div>  
                  </div>            
                  </Grid>
    
                  <Grid item xs={8}>
                  
                      <div className="cards" style={{ padding: 23 }}>
      <Card sx={{ maxWidth: 310 }} >

                      <CardActionArea>
                          <Link
                              style={{ textDecoration: "none", color: "black"}}
                              to="/Schedule"
                          >
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="./public/images/photo1.jpeg"
                                  alt="Schedule" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      Schedule
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      Schedule your week while creating your own to-do lists!
                                  </Typography>
                              </CardContent>
                          </Link>
                      </CardActionArea>

                      <CardActionArea>
                          <Link
                              style={{ textDecoration: "none", color: "black" }}
                              to="/Deadline"
                          >
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="./public/images/photo1.jpeg"
                                  height="140"
                                  alt="Deadline" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      Deadlines
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      See and keep track of your assignments and deadlines!
                                  </Typography>
                              </CardContent>
                          </Link>
                      </CardActionArea>

                      <CardActionArea>
                          <Link style={{ textDecoration: "none", color: "black" }} to="/Timer">
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image="./public/images/photo1.jpeg"
                                  alt="Timer" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      Timer
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      It's study time with our Pomodoro Timer!
                                  </Typography>
                              </CardContent>
                          </Link>
                      </CardActionArea>

                  </Card>
                  </div>
                  </Grid>
                  </Grid>
     
    </Box>
    </>
  );
};
export default Dashboard;
