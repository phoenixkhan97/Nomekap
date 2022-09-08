const db = require('../db')
const {Human} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const human = {
          name: "Alola Human",
          description:"The Alola region consists of four main islands that varies in terrain and weather."
}
await Human.insertMany(human)

}


const run = async () => {
    await main()
    db.close()
  }

  run()