const Joi = require('joi');
const express = require('express');
const admins = require('./routes/admins')
const app = express();

app.use(express.json());
app.use('/api/admins', admins);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}... by isf`));