const {Schema} = require("mongoose")

const Item = new Schema(
    {
        name:{type:String, required:true},
        description:{type:String, required:true}

    },
    {timestamps:true}
)

modeule.exports = Item