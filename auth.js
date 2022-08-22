var jwt=require('jsonwebtoken')
var doc={"username":"admin","password":"pass123" }
const SECRET="XXAAA2234545"
var token=jwt.sign(doc,SECRET)
console.log(token)
var authresult=jwt.verify(token,SECRET)
console.log(authresult)