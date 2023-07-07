
const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        require: true,
        unique: true
    },
    timestamps:{
        type: Date,
        default: Date.now
    }
})

imageSchema.methods.checkImage = function () {

}
const ImageModel = mongoose.model('Image', imageSchema)

module.exports = { ImageModel }