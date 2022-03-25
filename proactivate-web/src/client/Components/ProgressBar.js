import * as React from 'react';
import { styled } from '@mui/material/styles';
import {render} from 'react-dom';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function getProgressValue(issue_date){
    let curr = new Date();
    console.log(curr);
    console.log(issue_date);
    let timePassed =  (new Date(issue_date)).getTime()-curr.getTime();
    console.log(timePassed);
    
    let msInADay = 1000*60*60*24;
    let toReturn = 100-(timePassed/msInADay)*10;
    if (toReturn<0) {return 0}
    else if (toReturn < 1){return 20}
    console.log(toReturn);
    return toReturn;
 }


export default function CustomizedProgressBars() {
    return (
        <Box sx={{ flexGrow: 1 , width: '30%'}}>
        <br />
        <BorderLinearProgress variant="determinate" value={getProgressValue('Fri Mar 30 2022 14:54:13 GMT-0500 (Central Daylight Time)')} />
        </Box>
        );  
}