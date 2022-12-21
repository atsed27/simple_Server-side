const express = require("express");
const router = express.Router();
const signupTempletcopy = require('../module/signupmodle');

router.post('/signup',(req,res)=>{
const signupuser = new signupTempletcopy({
    fullname:req.body.fullname,
    username:req.body.username, 
    email:req.body.email,
    password:req.body.password
})
 signupuser.save()
 .then(data=>{
    res.json(data);
 })
 .catch(error=>{
    console.log(error);
    res.json(error);
 })

})



module.exports = router;