import React, { useState, useEffect } from 'react';

import NewsCards from '../NewsCards/NewsCards';

import { useNavigate } from 'react-router-dom';

// import alanBtn from '@alan-ai/alan-sdk-web';

// import useStyles from './styles';


 const News = () => {

    // const classes = useStyles();
    const navigate = useNavigate();
    const [newsArticles ,setNewsArticles] = useState([]);

    const alanKey = 'c306ca8766f3601999e8e573e3e76b5d2e956eca572e1d8b807a3e2338fdd0dc/stage';

    useEffect(() => {
      alanBtn({
          key: alanKey,
          onCommand: ({ command, articles }) => {
              if(command === 'showNews'){
                   console.log(articles);
                   setNewsArticles(articles);
              }else if(command === 'home'){
                navigate('/posts', { replace: true });
              }
          }
      })
  }, [])

  return (
    
    <div style={{marginTop: "100px", display: 'flex'}}>
        <NewsCards articles={newsArticles}/>
    </div>
  )
}

export default News;