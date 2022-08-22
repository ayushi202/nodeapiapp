// var express=require('express')
// var jwt=require('jsonwebtoken')
// var secret=require('./secret')
// var app=express()
// app.get("/register",(req,res)=>{
//     var userdetails=req.body
//     res.send(getToken(userdetails),"secret")

// })

// app.listen(5600)

var express = require('express')

var jwt = require('jsonwebtoken')

const secret = require('./secret')

var app = express()



function getToken(obj) {



    return jwt.sign(obj, secret)



}

function validate(obj, seckey) {

    return jwt.verify(obj, seckey)

}



app.use(express.json())



// app.set("view engine","jade")
// app.get("/",function(req,res){
//     res.render('sample')
// })

// app.set("view engine","vash")
// app.get("/",function(req,res){
//     res.render('index',{title:"My home page"})
// })

app.post("/register", (req, res) => {

    var userdetails = req.body



    res.send({ "token": getToken(userdetails), "secret": secret })



})

app.post("/login",(req,res)=>{
    var authconf=validate(req.body.token,req.body.secret)

    if(authconf){
        res.send("user validated")
    }
})




app.listen(5600, function() {

    console.log("server started")

})