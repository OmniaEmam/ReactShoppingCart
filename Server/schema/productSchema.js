const mongoose = require('mongoose');


const productScheam = new mongoose.Schema({
    id: String,
        title: String,
        imageURL: String,
        descreption: String,
        price: Number,
        sizes: [Number]

})

module.exports = productScheam;