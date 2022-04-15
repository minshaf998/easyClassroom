const express = require('express');
const Joi = require('joi');

const router = express.Router();

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

router.get('/', (req, res) => {
    console.log('from... get');
    res.send(JSON.stringify(admins));
})

router.get('/:id', (req, res) => {
    const admin = admins.find(c => c.id === parseInt(req.params.id));
    if (!admin) return res.status(404).send('The course with given ID was not exists');
    res.send(admin);
})

router.post('/', (req, res) => {
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
    // console.log(result.error.details[0].message);

    if (result.error) {
        const msg = result.error.details[0];
        const nmsg = (JSON.stringify(msg));
        return res.status(400).send(nmsg);
    }
    admins.push(admin);
    res.send(JSON.stringify(admin));
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const admin = admins.find(c => c.id === parseInt(req.params.id));
    if (!admin) return res.status(404).send('The course with given ID was not exists');


    const index = admins.indexOf(admin);
    admins.splice(index, 1);

    res.send(admin);
})

module.exports = router;