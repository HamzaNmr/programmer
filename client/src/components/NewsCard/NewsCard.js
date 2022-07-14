import React from 'react';

import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles';


const NewsCard = ({ article:{description,publishedAt, source, title, url, urlToImage}, i}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} image={urlToImage || 'https://images.hindustantimes.com/img/2022/07/10/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1657497574624.jpeg'}/>
          <div className={classes.details}>
            <Typography variant='body2' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant='body2' component='h2'>{source.name}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
          <CardContent>
            <Typography variant='body2' component='p'>{description}</Typography>
          </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='small'>Learn More</Button>
        <Typography variant='h5'>{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard;