const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    item_name : {
        type : String , required: true,
    },
    item_type : {
        type: String , required: true,
    },
    item_rate : {
        type : Number , required: true,
    },
    item_quantity : {
        type : Number , required: true
    },
    item_minimum : {
         type : Number , required: true
    }  
}, { timestamps: {} });

module.exports = mongoose.model("Item", Item )