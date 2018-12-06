import * as express from 'express';
import {Application} from "express";
import {readAllLessons} from "./read-all-lessons.route";
import {addPushSubscriber} from "./add-push-subscriber.route";
import {sendNewsletter} from "./send-newsletter.route";

const cors = require('cors');
const bodyParser = require('body-parser');
const webpush = require('web-push');

const vapidKeys = {
  "publicKey": "BHFa_rSwZZKym1bg-gHaJl89JH5f2ORYpNzyVajrTnhPHJs87PNH3rxchAG5X4peQYN51RP9S8jcDxnMkluzBzA",
  "privateKey": "L2TAt7nmB6Bgki3F9fBebPDrpyit3f-Ci9yaV8THlj0"
}

webpush.setVapidDetails(
    'mailto:cesar_alonso_m_g@hotmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app: Application = express();

// Middleware
app.use(cors({credentials: true, origin: 'http://localhost:3333'}));

app.use(bodyParser.json());

// REST API
app.route('/api/lessons')
    .get(readAllLessons);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);

// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});










