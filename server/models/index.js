const mongoose = require("mongoose")
const HumanSchema = require("./human")
const NomekopSchema = require("./nomekop")
const ItemSchema = require("./item")

const Human = mongoose.model("human", HumanSchema)
const Nomekop = mongoose.model("nomekop", NomekopSchema)
const Item = mongoose.model("item", ItemSchema)

module.exports = {
    Human,
    Nomekop,
    Item
}