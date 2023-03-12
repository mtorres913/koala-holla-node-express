const express = require('express');
const koalaRouter = express.Router();

let koalaList = [
    // {id: 1, name: 'Scotty', gender:'M', age:'4', ready_to_transfer: 'Y', notes: 'Born in Guatemala'},
    // {id: 2, name: 'Jean', gender:'F', age:'5', ready_to_transfer: 'Y', notes: 'Allergic to lots of lava'},
    // {id: 3, name: 'Ororo', gender:'F', age:'7', ready_to_transfer: 'N', notes: 'Loves listening to Paula (Abdul)'},
    // {id: 4, name: 'Logan', gender:'M', age:'15', ready_to_transfer: 'N', notes: 'Loves the sauna'},
    // {id: 5, name: 'Charlie', gender:'M', age:'9', ready_to_transfer: 'Y', notes: 'Favorite band is Nirvana'},
    // {id: 6, name: 'Betsy', gender:'F', age:'4', ready_to_transfer: 'Y', notes: 'Has a pet iguana'},
]
// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET Request made for /koalas');
    // Send back the list of koalas!
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText).then((result) => {
        //result.rows is the Array of data from our database
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET ${error}`)
     // Tell the client something went wrong
     res.sendStatus(500);
    })    
});
// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST Request made for /koalas');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let koalaToAdd = req.body;
    // NEVER use template literal to enter strings
    // Using $1 $2 will sanitize the input
    let queryText = `INSERT INTO "koalas" ("name", "age", "gender", "transfer?", "notes")
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    //                      $1                  $2
    pool.query(queryText, [koalaToAdd.name,koalaToAdd.gender,koalaToAdd.age,koalaToAdd.ready_to_transfer,koalaToAdd.notes]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in POST ${error}`)
        res.sendStatus(500);
    })
});

// PUT


// DELETE
koalaRouter.delete('/:id', (req, res) => {
    // ??? What are we deleting?
    console.log(req.params.id); // Similar to req.body
    const deleteIndex = Number(req.params.id);
    koalaList = koalaList.filter((koala, index) => index !== deleteIndex);
    // Always send back a response
    res.sendStatus(200);
});
module.exports = koalaRouter;