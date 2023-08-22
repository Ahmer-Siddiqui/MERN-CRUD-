const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    userName: {type: String},
    gmail: {type: String},
    phoneNumber: {type: String},
    fileName: {type: String},
    fileSize: {type: String},
    fileURL: {type: String},
})

module.exports = formSchema;