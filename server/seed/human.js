const db = require("../db")
const {Human} = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async()=>{
const human = [
    {
        name:"",
        age:"",
        gender:"",
        health:"",
        attack:"",
        defense:"",
        description:""
    }
]

await Human.insertOne(Human)
}


const run = async () =>{
    await main()
    db.close()
}

run()

