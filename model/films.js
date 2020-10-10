const {Schema,model} = require('mongoose')

const FilmsSchema = new Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    rank:Number,
    img:String,
    desc:String,
    year:String,
    type:String
})


module.exports = model('films',FilmsSchema)

