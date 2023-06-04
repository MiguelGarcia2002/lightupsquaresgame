const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userTemplateCopy = require("../models/UserModels");

router.post('/Game', (request, response) =>{
    const addedUser = new userTemplateCopy({
        fullName: request.body.fullName,
        score: request.body.score,
    })
    addedUser.save()
    .then((data) =>{
        response.json(data)
    })
    .catch((error) =>{
        response.json(error)
    })
})

module.exports = (db) =>{
    router.get('/Leaderboard', (req, res) => {
    let players = []

    db.collection('mytables')
    .find() //Resturns a cursor which is an object that points to a set of documents by query 
    .sort({ score: -1}) //Also returns a cursor method
    .toArray()
    .then((tempPlayers) => {
    players = tempPlayers;
      res.status(200).json({message: 'Here are the top players', players})
      console.log(players);
    })
    .catch(() => {
      res.status(500).json({error: 'bruh cant find anything'})
      console.log(error)
    }) 
   
});
return router
}

