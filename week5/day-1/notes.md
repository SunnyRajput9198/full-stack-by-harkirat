//express is a framework in js
//Routes represent hm kha pe hai specefic site mehttps://app.100xdevs.com/courses/14/466/467 
//isme 100x ke baad jo course hai vo route hai

//Header-> are key-value pairs sent b/w a client and a server in an HTTP request or response
//they convey metadata about the request or response such as content type,auth information etc
// extra meta data is called header 
//common headers
// 1. Authorization (Sends the user auth information)
// 2. Content-Type - Type of information client is sending (json, binary etc)
// 3. Referer - Which URL is this request coming from

//request and response header
// request->The headers the client sends out in the request are known as request headers
//response->The headers that the server responds with are known as the response headers.


// FETCH API-
Difference between fetch and axios:

    - fetch
            - Syntax: const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
                method: "GET"
            })
            - yeh data fetch krta hai given url se but ispe fetch ke object bana ke method add krna pdta hai like get, post 
    - Axios 
            - Syntax 
            - Yeh bhi fetch karta hai but ispe await axios.METHOD_NAME likh diya jta jisse code thora kam complex aur less rehta hai 
            - but ispe header pe <script src = "   LINK    "></script> yeh add krna pdta jisse kch KB of code increase ho jta hai 