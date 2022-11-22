import React from 'react';
import { Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import profileImage from "../../assets/images/profile-image.jpg"

export default function About() {
    return (
        <div className='about'>
        <Grid container alignItems="left">
        <Avatar src={profileImage} alt="A photo of me" sx={{ width:300, height: 300 }}/>
    <h1>This is me!</h1>
    <p>
        I am a graduate of Webster University in Saint Louis, Missouri.  I transplanted to Seattle in 2017 and have been finding my way ever since then.  I have continued to find myself in the print and design industry, but have not found my place in the things I really want to do.  
    </p>
    <p>
        I have spent my time during the last 6 months refreshing myself on web development with a goal of getting my own freelance work off the ground.
    </p>
    <p>
        I am excited to move forward with my carrer and life.
    </p>
        </Grid>
        </div> 
    )
}