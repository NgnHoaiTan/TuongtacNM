import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import account from './routers/account.js';
import user from './routers/user.js';
import image from './routers/image.js';
import commentPost from './routers/commentPost.js';
import commentVideo from './routers/commentVideo.js';
import reactionPost from './routers/reactionPost.js';
import reactionVideo from './routers/reactionVideo.js';
import video from './routers/video.js';

const app = express();
const PORT = 5000;
const URI = "mongodb+srv://hoaitan:CWwAn9VV0dpdQz0y@cluster0.n8bi5.mongodb.net/WildDiscoveryDB?retryWrites=true&w=majority";

app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' })); 
app.use(cors());

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch(error => {
        console.log('error', error);
    });
app.use('/accounts',account);
app.use('/users',user);
app.use('/images',image);
app.use('/commentpost',commentPost);
app.use('/commentvideo',commentVideo);
app.use('/reactionpost',reactionPost);
app.use('/reactionvideo',reactionVideo);
app.use('/video',video);