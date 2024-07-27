const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Users'},
    image:{type:Object,required:true},
    caption:{type:String,required:true},
    likes:[{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    created_at:{type:Date,default:new Date()}
})

module.exports = mongoose.model('Posts',postSchema);