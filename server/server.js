const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

let admins = [
    {
        name: 'kumar',
        id: 1,
        email: 'kumar@gmail.com',
        password: '12345'
    },
    {
        name: 'rani',
        id: 2,
        email: 'rani@gmail.com',
        password: '6789'
    }
]

app.get('/api/admins', (req, res) => {
    res.send(admins);
})

app.get('/api/admins/:id', (req, res) => {
    const admin = admins.find(c => c.id === parseInt(req.params.id));
    if (!admin) return res.status(404).send('The course with given ID was not exists');
    res.send(admin);
})

app.post('/api/admins/', (req, res) => {
    const admin = {
        id: admins.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    const schema = Joi.object({
        name: Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(5),
    });

    const result = schema.validate(req.body);
    // console.log(result);

    if (result.error) return res.status(400).send(result.error.message);

    admins.push(admin);
    res.send(admin);
})

app.put('/api/admins/:id', (req, res) => {
    const admin = admins.find(c => c.id === parseInt(req.params.id));
    if (!admin) return res.status(404).send('The course with given ID was not exists');

    const schema = Joi.object({
        name: Joi.string(),
        password: Joi.string().required().min(5),
    });

    const result = schema.validate(req.body);

    if (result.error) return res.status(400).send(result.error.message);

    admin.name = req.body.name;
    admin.password = req.body.password;

    res.send(admin);
})

app.delete('/api/admins/:id', (req, res) => {
    const admin = admins.find(c => c.id === parseInt(req.params.id));
    if (!admin) return res.status(404).send('The course with given ID was not exists');


    const index = admins.indexOf(admin);
    admins.splice(index, 1);

    res.send(admin);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}... by isf`));