const route = require('express').Router()
const userRoute = require('./user-route')

route.use('/',userRoute)

module.exports = route