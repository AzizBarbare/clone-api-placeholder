// const express = require('express')
import dotenv from 'dotenv'
import express from 'express'
import { Database } from './src/commun/database.js';

import { route as UserRouter } from './src/users/index.js';

dotenv.config();
const port =process.env.PORT || 3000;
const database = new Database();
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.use('/users', UserRouter);

database.generateConnexion()
    .then(() => {
        app.listen(port, () => {
            console.log(`Starting at http://localhost:${port}`);
        });
    })
