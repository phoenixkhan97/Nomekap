const {Schema} = require("mongoose")

const Nomekop = new Schema(
    {
        name:{type:String, required:true},
        description:{type:String, required:true}

    },
    {timestamps:true}
)

modeule.exports = Nomekop