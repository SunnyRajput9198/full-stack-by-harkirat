//jwt->
//1.generate
//2.decode
//3.verify

const jwt=require("jsonwebtoken")


const value={
    name:"harkirat",
    password:12333
}
//generating a jwt
const token =jwt.sign(value,"secret")
console.log(token)
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJwYXNzd29yZCI6MTIzMzMsImlhdCI6MTczNjQxMjUzN30.p4MqBBCp3JYA4Ui6Wz7cCQXSVKpKYZlFA6n7j_jpb2s
//this token has been generated using this secret and can only be verified using that secret

///this token can be decoded by anyone you can decode it in jwt.io
//it can only be verified using this secret
console.log(jwt.verify(token,"secret"))

///->try catch--if a exceptionoccur then the catch block will be executed
try{
    let a;
    console.log(a.length);
    console.log("hi there from inside")
}catch(e){
    console.log("inside catch statement")
}
