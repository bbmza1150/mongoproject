const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    Project_name: {type: String , required: true},
    File: {type: String , required: true}, 
    DateStart: {type: Date, required: true}, 
    DateLasttime: {type: Date, required: true}, 
}, { versionKey: false });

module.exports = mongoose.model('Project',ProjectSchema);