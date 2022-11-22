import React from 'react';
import { Card, FormControl, Input, Button, Grid } from '@mui/material';


const styles = {
    spacer: {
        marginTop: 30
    }
}

export default function Contact() {
    return (
        <div className="Contact" style={styles.spacer}>
            <Grid container direction="column" alignItems="center">
        <h3>Want to talk?</h3>

        <Card sx={{maxWidth:"400px"}}>
        <FormControl
         component="form"
         sx={{
           '& > :not(style)': { m: 1 },
         }}
         noValidate
         autoComplete="off"
         >
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />
            <Button type="submit">
                Submit
            </Button>
        </FormControl>
        </Card>
        </Grid>
        </div> 

    )
}