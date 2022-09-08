const db = require('../db')
const {Human} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const human = {
          name: "Jeremy",
          description:"A male human designed as a father. It has a mate and offspring, but they were taken to the Sanctuary while the male was away."
}
await Human.insertMany(human)

}


const run = async () => {
    await main()
    db.close()
  }

  run()