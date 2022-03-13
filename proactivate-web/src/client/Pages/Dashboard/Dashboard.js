import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import ToDoItem from "../../Components/ToDoItem";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "mui-image";
import Deadline from "../Deadline/Deadline";

const label = { inputProps: { "aria-label": "demo" } };

const Dashboard = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ width: 200, height: 200 }} />
      </Stack>

      <div className="information">
        <p>Total Studying Time: 4h 36m</p>
        <p>Task for today:</p>
        <ToDoItem />
      </div>

      <Card sx={{ maxWidth: 310 }}>
        <CardActionArea>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Schedule"
          >
            <CardMedia
              component="img"
              height="140"
              image="./public/images/photo1.jpeg"
              alt="Schedule"
            />
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
              alt="Deadline"
            />
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
              alt="Timer"
            />
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
    </>
  );
};
export default Dashboard;
