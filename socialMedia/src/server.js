const express = require('express')

const models = require('./db/models')
const db = models.db

const app = express()

db.sync({force: true}).then(()=>{
    app.listen(8383, ()=>{
        console.log("server started at: http://localhost:8383")
    })
}).catch((err)=>{
    console.log(new Error("Could not start database"))
})