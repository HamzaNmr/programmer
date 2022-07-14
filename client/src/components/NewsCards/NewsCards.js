import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
// import './styles.css';




const infoCards = [
  { color: '#00494D', title: 'News', text: '"what is the news today?"', info: 'We will give you the latest news from TECHCRUNCH about technology and a lot of intersting news you will like.'},
];



const NewsCards = ({ articles }) => {
  const classes = useStyles();

  if(!articles.length){
    return(
      <Grow in>

     
      <Grid container alignItems='stretch' className={classes.container}>
        {infoCards.map((infoCard) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
              <Typography variant='h4' style={{display: 'flex', alignItems:'center', marginLeft:'23%'}}>
                <NewspaperOutlinedIcon sx={{fontSize: '3rem',marginRight:'2rem'}}/>
                {infoCard.title}
                </Typography>
              {infoCard.info ? 

              (<Typography variant='h6'>
                <stong>
                  {infoCard.title.split(' ')[2]}
                </stong>
                <br/>
                <p style={{marginBlock:'1rem'}}>{infoCard.info}</p>
              </Typography>) 
             
              : null}
              <Typography variant='h6'>Try saying: <br/> <i>{infoCard.text}</i></Typography>
            </div>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
          <div  className={classes.cardTwo}>
            <h1>
              Welcome in our News page.
            </h1>
            <h3>
            here you can follow and observe all Technology news.
            </h3>
            <h3>
              just give your command by using voice power,
              <br/>
              we try to make your browsing fun and easy.
            </h3>
            <h2>Thank you.</h2>
          </div>
          <div  className={classes.cardThree}>
          <KeyboardReturnOutlinedIcon sx={{fontSize: '3rem',}}/>
            <Typography variant='h6'>
              <strong> You can go back to the Home page by saying:</strong>
              <br/>
              <i>"Go back to the Home page"</i>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grow>
    );
  }

  return (
    <Grow in>

      <Grid container alignItems='stretch' className={classes.container}>
      {
            articles.map((article,i) => (
              <Grid item xs={12} sm={6} md={4} style={{display: 'flex',}}>
                <NewsCard article={article} i={i} key={article}/>
              </Grid>
            ))
        }
      </Grid>

    </Grow>
  )
}

export default NewsCards;