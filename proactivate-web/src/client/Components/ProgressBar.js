import * as React from 'react';
import { styled } from '@mui/material/styles';
import {render} from 'react-dom';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function getProgressValue(time){
    let curr = new Date();
    let timePassed =  time-curr.getTime();
    let msInADay = 1000*60*60*24;
    let toReturn = 100-(timePassed/msInADay)*10;
    if (toReturn<0) {return 0}
    else if (toReturn < 1){return 20}
    console.log("time" + time);
    console.log("toReturn" + toReturn);
    // console.log(toReturn);
    return toReturn;
 }


export default function CustomizedProgressBars({time}) {
    return (
        <Box sx={{ flexGrow: 1 , width: '30%'}}>
        <br />
        <BorderLinearProgress variant="determinate" value={getProgressValue(time)} />
        </Box>
        );  
}