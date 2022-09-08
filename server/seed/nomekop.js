const db = require('../../db')
const {Nomekop} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const nomekop = {
          name: "Professor Mew",
          description:"One of the original Nomekop, Professor Mew has shown an interest to humans and their habitats."
}
await Nomekop.insertMany(nomekop)

}


const run = async () => {
    await main()
    db.close()
  }

  run()