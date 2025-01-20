//creating an express app
const express=require("express")

const jwt=require("jsonwebtoken")
const jwt_secret="randomname"
//express lib return you a function
const app=express()

app.use(express.json());

//isko phle token me bnaya hai phir jwt me so commented code token ka hai ar uncommented jwt ka


//ye har baar ek random token generate krega in form of string
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f',
         'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
         'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
          'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1',
         '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
   for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

const user=[]
//[
//
////
//{username:harkirat,paassword:"125635",token:"gbrybnbzgfkhhrdb"}
//
///]

// http://localhost:3000/signup
// body me->
// {
//     "username":"sunny","password":"538657"
// }
app.post("/signup",function(req,res){
    //inko body me pass kran hai
    const username=req.body.username;
    const password=req.body.password;

    user.push({
        username:username,
        password:password
    })
    res.json({
        messsage:"you are signed up"
    })
    console.log(user)
})

//http://localhost:3000/signin
// body me->
// {
//     "username":"sunny","password":"538657"
// }
//in signin we use jwt.sign() to convert username to jwt
app.post("/signin",function(req,res){
    //inko body me pass krna hai
    const username=req.body.username;
    const password=req.body.password;


    //ye check krta hai khi isi name and password ka phlee login to ni hua hai
    let founduser=user.find(function(u){
        if(u.username==username&&u.password==password){
            return true;
        }else{
            return false
        }
    })
    if(founduser){
        let token=jwt.sign({
            username:username
        },jwt_secret)//convert their username over to a token
        // let token=generateToken();
        // founduser.token=token;//no need to store token bcse it is now a jwt
        res.json({
            message:token
        })
    }else{
        res.status(403).send({
            message:"Invalid username or passwword"
        })
    }

    console.log(user)
    console.log(token)
})


// header me token variable bnake token=tzWRi1dI5LvZ4wc96jzaAgvEcvmgWNOZ
// http://localhost:3000/me
// In the /me endpoint, use jwt.verify to verify the token--> .verify to convert jwt to username
app.get("/me",function(req,res){
    //isko header me pass krna hai na kii body me jo vo return kre usi ko dal
    //dena header me
    let token=req.headers.token;//jwt

    //this line is converting jwt over to a username
    const decodedinformation=jwt.verify(token,jwt_secret)
    const username=decodedinformation.username
    let founduser=null;


    // for(let i=0;i<user.length;i++){
    //     if(user[i].token==token){
    //         founduser=user[i]
    //     }
    // }
    for(let i=0;i<user.length;i++){
        if(user[i].username==username){
            founduser=user[i]
        }
    }

    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }else{
        res.json({
            message:"token invalid"
        })
    }
})

app.listen(3000)