import React from "react";
import CustomizedProgressBars from "../../Components/ProgressBar.js";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Tasks = ({title, status, dueDate}) => {
return(

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <h3>{title}</h3>
        </Grid>

        <Grid item md={8}>
          <CustomizedProgressBars/>
        </Grid>
      </Grid>
    </Box>
);
};

export default Tasks;