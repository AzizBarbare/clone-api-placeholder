import express from 'express';

import { UserController } from "./controllers/user.controller.js"
export const route = express();
const userController = new UserController();

//Get All
route.get('/', (req, res) => {
    const results = userController.getAll();
    res.status(200).json(results);
})
//Get One
route.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = userController.getOne(id);
    if(result)
        res.status(200).json(result);
    res.status(404).json();
})
//Create
route.post('/', async (req, res) => {
    try {
        const { body } = req;
        const result = await userController.add(body);
        if(result) 
            res.status(201).json(result);
        res.status(404).json();    
    } catch (err) {
        console.error( err );
        res.status(500).json();    
    }
})
//Delete
route.delete('/:id', (req, res) => {
    const { id } = req.params;
    const result = userController.delete(id);
    if(result)
        res.status(200).json(result);
    res.status(404).json();
})
//Put
route.put('/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const result = userController.update(id, body);
    if(result)
        res.status(200).json(result);
    res.status(404).json();
})