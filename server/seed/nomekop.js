const db = require("../db")
const {Nomekop} = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async()=>{
const nomekop = [
    {
        name:"Kobra",
        description:"A poison type Nomekop known to capture humans using their venom. It's usually looking for its next meal."
    }
]

await Nomekop.insertOne(nomekop)
}


const run = async () =>{
    await main()
    db.close()
}

run()