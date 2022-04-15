const express = require('express');
const admins = require('./routes/admins')
const mongoose = require("mongoose");

const logger = require('./middleware/logger');

const app = express();

const uri = 'mongodb+srv://inshaf:12345678easy@easyclassroomcluster.4z1zg.mongodb.net/classGroup6?retryWrites=true&w=majority';

mongoose
    .connect(uri)
    .then(() => console.log("connected to database sf..."))
    .catch((error) => console.log("connection failed sf...", error));


app.use(express.json());
// app.use(logger);
app.use('/api/admins', admins);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}... sf`));