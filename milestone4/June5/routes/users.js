const express = require('express');
const router = express.Router();

router.get('/getUsers',(req,res) => {
    res.status(200).json({message: 'Retrieved all users'})

})

router.post('/makeUser', (req,res) => {
    const newUser = req.body; 
    res.status(201).json({ message:'User created' , user: newUser})
})

module.exports = router;