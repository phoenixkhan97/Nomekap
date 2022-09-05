const db = require("../db")
const {Human} = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async()=>{
const human = [
    {
        name:"Jeremy",
        age:"35",
        gender:"Male",
        health:"15",
        attack:"12",
        defense:"12",
        description:"Jeremy is a human who lived in the camp. He is searching for his wife and child after finding his camp empty one morning."
    }
]

await Human.insertOne(human)
}


const run = async () =>{
    await main()
    db.close()
}

run()

