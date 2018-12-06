
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const webpush = require('web-push');

// import {readAllLessons} from "./read-all-lessons.route";
// import {addPushSubscriber} from "./add-push-subscriber.route";
// import {sendNewsletter} from "./send-newsletter.route";
const sendNewsletter = require('./send-newsletter.route');
const addPushSubscriber = require('./add-push-subscriber.route');
const readAllLessons = require('./read-all-lessons.route');


/* LOCALS
const vapidKeys = {
  "publicKey": "BHFa_rSwZZKym1bg-gHaJl89JH5f2ORYpNzyVajrTnhPHJs87PNH3rxchAG5X4peQYN51RP9S8jcDxnMkluzBzA",
  "privateKey": "L2TAt7nmB6Bgki3F9fBebPDrpyit3f-Ci9yaV8THlj0"
}*/

const vapidKeys = {
    "publicKey": "BKDqvtj7FSHmb9yNWrj6MkTMK1KCPCD2N2iSPZfUCF6vB0lM_ms1hPK4EmrVIAblrJtaa02fHN0d2H501C8cF3k",
    "privateKey": "cgT7MIO70HEz0ex5FBK0ezP6AVUIB6rycu9rBVcEDJY"
}


webpush.setVapidDetails(
    'mailto:cesar_alonso_m_g@hotmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app = express();

// Middleware
app.use(cors({credentials: true, origin: 'https://tuxcar-pwa.firebaseapp.com'}));

app.use(bodyParser.json());

// REST API
app.route('/api/lessons')
    .get(readAllLessons);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);

// launch an HTTP Server
const httpServer = app.listen(3000, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});










