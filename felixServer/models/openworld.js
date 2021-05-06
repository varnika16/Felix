var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var openWorldSchema = new Schema({
    caption: {
        type: String,
        default: ''
    },
    image:{
        type: String 
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

var OpenWorlds = mongoose.model('OpenWorld', openWorldSchema);
module.exports = OpenWorlds;