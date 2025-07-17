import express from 'express';
import User from '../models/user'

const router = express.Router();

router.post('/create', async (req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({message: 'User created',user});
    } catch (err){
        res.status(400).json({error: err.message});
    }
})

router.get('/', async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err){
        res.status(500).json({error: 'Failed to fetch users'});
    }
})

export default router;


