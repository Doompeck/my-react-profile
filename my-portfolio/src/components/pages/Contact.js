import React from 'react';
import { Card, FormControl, Input } from '@mui/material';


const styles = {
    spacer: {
        marginTop: 30
    }
}

export default function Contact() {
    return (
        <div className="Contact" style={styles.spacer} container>
        <h3>Want to talk?</h3>
        <Card direction="column" alignItems="center" sx={{maxWidth:"400px"}}>
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
        </FormControl>
        </Card>
        </div> 

    )
}