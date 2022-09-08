const db = require('../db')
const {Item} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const ration = {
          name: "Ration",
          description:"A can of goods that heal 20%."
}
await Item.insertMany(ration)

}


const run = async () => {
    await main()
    db.close()
  }

  run()