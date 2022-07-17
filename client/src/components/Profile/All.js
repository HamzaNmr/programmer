import React from 'react';
import { Container, Button, Typography, Paper, Avatar, Grid, Grow, Box } from '@material-ui/core';
import useStyles from './styles';

import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import FollowersCard  from '../FollowersCard/FollowersCard';

const All = () => {

  const classes = useStyles();

  return (
    <Grid container justifyContent='space-between' alignItems='stretch' spacing={1}>
        <Grid item xs={12} sm={3}>
           <Box>
           <Form />
            <br/>
            <FollowersCard />
           </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
            <Posts />
        </Grid>

        {/* <Grid item xs={12} sm={3}>
          <FollowersCard />
        </Grid> */}
    </Grid>
  )
}

export default All