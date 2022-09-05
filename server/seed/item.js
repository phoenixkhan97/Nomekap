const db = require("../db")
const {Item} = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async()=>{
const item = [
    {
        name:"Ration",
        description:"A small can of food that fills a human's stomach halfway."},
    {
        name:"Water",
        description:"A waterbottle filled with clean water."
    }]

const SpecialItem = [ 
    {
        name:"Narwal Toy",
        description:"A child's toy. Belongs to Jeremy."
    }
]

await Item.insertMany(item)
await Item.insertOne(SpecialItem)
}


const run = async () =>{
    await main()
    db.close()
}

run()

