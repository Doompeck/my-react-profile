import React from 'react';
import { Grid } from '@mui/material';
import WebProjects from '../WebProjects'

import projects from '../ProjectData';

const styles = {
    spacer: {
        marginTop: 30
    }
}

export default function Portfolio() {
    return (
        <div className="portfolio" style={styles.spacer}>
            <Grid container direction="column" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <h3>My current work</h3>
        {projects.map(({ id, title, description, thumbnail, repo, live }) => (
          <WebProjects
            id={id}
            title={title}
            description={description}
            thumbnail={thumbnail}
            repo={repo}
            live={live}
          />
        ))}
      
        </Grid>
        </div> 
    )
}