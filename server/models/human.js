const {Schema} = require("mongoose")

const Human = new Schema(
    {
        name:{type:String, required:true},
        age:{type:String, required:true},
        gender:{type:String, required:true},
        health:{type:String, required:true},
        attack:{type:String, required:true},
        defense:{typr:String, reuired:true},
        description:{type:String, required:true}

    },
    {timestamps:true}
)

modeule.exports = Human