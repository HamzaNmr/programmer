const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const postRoutes = require('./routes/posts.js');
const AuthRoutes = require('./routes/users.js');
const passport = require('passport');
const groupRoutes = require('./routes/groupsRoute');


const app = express();

dotenv.config();
 
 app.use(bodyParser.json({limit: "30mb", extended: true}));
 app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
 app.use(cors());

 app.use('/posts', postRoutes);
 
 app.use('/user', AuthRoutes);
 app.use(passport.initialize());

 const PORT = process.env.PORT || 5000;

 mongoose.connect(process.env.CONNECTION_URL)
         .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
         .catch((error) => console.log(error.message));

//  mongoose.set('useFindAndModify', false);