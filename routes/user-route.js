const userRoute = require('express').Router()
const mongoose = require('mongoose')

const User = require('../api/model/user')
userRoute.post('/user', (req,res) => {
    
    User.create({_id: new mongoose.Types.ObjectId(), name: req.body.name})
    .then((user_data) => {
            console.log({user_data: user_data})
            res.status(200).json({user_data:user_data})
    })
    .catch((err) => {
            console.log(err)
            res.status(400).json({message: err})
    })
})
userRoute.get('/get_user', (req,res) => {
    
    User.findOne({}, async (err,doc) => {
        try {
            if(doc === null) {
                return res.status(500).json({error: "null"})
            } else {
                return res.status(200).json({user_data: doc})
            }
        } catch(error) {
            console.log(error)
            res.status(500).json({message: error})
        }
    })   
})
userRoute.get('/get_users', (req,res) => {
    User.find((err,doc) => {
        if(err) {
            res.status(500).json({message: 'error'})
        } else {
            res.status(200).json({users_data: doc})
        }
    })
})
userRoute.get('/getUser/:userId', (req,res) => {
    User.findById(req.params.userId, (err,doc) => {
        if(err) {
            console.log(err)
            res.status(500).json({message: err})
        } else {
            console.log(doc)
            res.status(200).json({message: doc})
        }
    })
})

module.exports = userRoute