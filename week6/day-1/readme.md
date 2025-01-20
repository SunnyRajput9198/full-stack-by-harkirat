jwt->
JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for authentication and information exchange in web applications.

// so basically what happens jo token hota hai vo database bhejta hai froentend se request jaegi backend pe vo databse ko forward kr dega phir vo token use kiya jaega for identification
--lekin in case of jwt the jwt itself encoded the username in the backend isko databse pe hit nii krna hota hai --username to  jwt anfd jwt to username it is self encoded ho jaega

jwt is stateless
stateful->
By stateful here, we mean that we need to store these tokens in a variable right now (and eventually in a database). 

problem while using token->
The problem is that we need to send a request to the database every time the user wants to hit an authenticated endpoint
solution->jwt


## What is authentication?

The process of letting users `sign in` / `sign out` of your website. Making sure your `routes` are protected and users can only get back their `own` data and not the data from a different user


AUTH workflow->
1. The user comes to your website (courses.com)
2. The user sends a request to `/signin` with their `username` and `password`
3. The user gets back a `token`
4. In every subsequent request, the user sends the token to identify it self to the backend.
***Think of the token like a secret that the server has given you. You send that secret back to the server in every request so that the server knows who you are. 