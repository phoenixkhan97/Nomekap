const express = require('express')
const cors = require('cors')
const logger = require ('morgan')
const routes = require('./routes')
const PORT = 3001
const db = require('./db')
const {Item} = require("./models")
const {Human} = require("./models")
const {Nomekop} = require("./models")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use('/api', routes)


app.get('/api/items', async (req,res) =>{
    const items = await Item.find({})
    res.json(items)
})

app.get('/api/human', async (req,res) =>{
    const human = await Human.find({})
    res.json(human)
})

app.get('/api/nomekop', async (req,res) =>{
    const nomekop = await Nomekop.find({})
    res.json(nomekop)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))