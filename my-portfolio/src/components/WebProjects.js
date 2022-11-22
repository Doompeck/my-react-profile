import React from 'react';
import { Grid, Typography, Card, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';


const styles = {
    spacer: {
        margin: 30,
        padding: 10
    }
}


export default function WebProjects({ id, title, description, thumbnail, repo, live }) {
 return (
    <Grid item xs={10} md={6} key={id}>
        <Card>
            <Box sx={{padding: '10px'}} >
                <CardMedia 
                component="img"
                image={thumbnail}
                sx={{width:"15rem"}}               
                />
            </Box>
            <Box
                sx={{
                    padding: '10px',
                }}
                  >
                
                <Typography variant="h6">{title}</Typography>
                <Typography>{description}</Typography>
                <Typography>{repo}</Typography>
                <Typography>{live}</Typography>
            </Box>
        </Card>
    </Grid> 
 )
}