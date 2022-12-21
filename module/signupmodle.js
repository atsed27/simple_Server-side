const mongoos = require('mongoose');

const signupTemplet = new mongoos.Schema({
    
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoos.model('sign',signupTemplet);