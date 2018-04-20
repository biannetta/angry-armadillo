const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/commands', (request, response) => {
    response.send("Must be used via post");
});
app.post('/commands', (request, response) => {
    const { token, text, trigger_id, user_id, command } = request.body;
    response.send(`${user_id}`);
});

exports.app = functions.https.onRequest(app);
