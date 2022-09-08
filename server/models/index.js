const mongoose = require('mongoose')

const ItemSchema = require('./item')
const HumanSchema = require('./human')
const NomekopSchema = require('./nomekop')



const Item = mongoose.model("item", ItemSchema)
const Human = mongoose.model("human", HumanSchema)
const Nomekop = mongoose.model("nomekop", NomekopSchema)

module.exports = {
    Item,
    Human,
    Nomekop
}