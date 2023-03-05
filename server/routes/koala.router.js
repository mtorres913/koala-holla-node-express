const express = require('express');
const koalaRouter = express.Router();

let koalaList = [
    {id: 1, name: 'Scotty', gender:'M', age:'4', ready_to_transfer: 'Y', notes: ''}



]
// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST Request made for /koalas');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let koalaToAdd = req.body;
    koalaList.push(koalaToAdd);
    res.sendStatus(201); // Success!
});

// PUT


// DELETE

module.exports = koalaRouter;