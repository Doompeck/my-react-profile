import React from "react";
import { Grid } from '@mui/material';
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

export default function Footer() {
    return (
    <Grid container spacing={5} justifyContent="center" className="footer">
        <Grid item>
        <a href="mailto:towheadcreative@gmail.com">
        <h3><GrMail /></h3>
      </a>
        </Grid>
        <Grid item>
      <a href="https://github.com/doompeck/" target="_blank">
        <h3><GrGithub /></h3>
      </a>
      </Grid>
      <Grid item>
      <a href="https://www.linkedin.com/in/benjaminstanfield/" target="_blank">
        <h3><GrLinkedin /></h3>
      </a>
      </Grid>
    </Grid>
    );
}
