import React from 'react';
import { Container, Button, Typography, Paper, Avatar, Grid, Grow } from '@material-ui/core';
import useStyles from './styles';

import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import FollowersCard  from '../FollowersCard/FollowersCard';

const All = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='stretch' spacing={1}>
        <Grid item xs={12} sm={3}>
            <Form />
        </Grid>

        <Grid item xs={12} sm={5}>
            <Posts />
        </Grid>

        <Grid item xs={12} sm={3}>
          <FollowersCard />
        </Grid>
    </Grid>
  )
}

export default All