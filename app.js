const express = require('express')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const routes = require('./routes/index')


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//mongoDb on mongoAtlas
mongoose.connect('mongodb://dbUser:Z0Zytr7Rc5PtHBmp@cluster0-shard-00-00.8ubes.mongodb.net:27017,cluster0-shard-00-01.8ubes.mongodb.net:27017,cluster0-shard-00-02.8ubes.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-230pxs-shard-0&authSource=admin&retryWrites=true&w=majority"', {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if(err) {
        console.log({error: err})
    } else {
        console.log({message: "connected to mongoAtlas cluster"})
    }
})

app.use(routes)

app.listen(port, () => {
    console.log(`app is listening to http://localhost:${port}`)
})