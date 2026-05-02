/*

HTTP =
communictaion between browser and server in internet

*/

//-----------------------------------------------------------

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("servre is running");   
    


     if(req.url === '/'){
        res.end("home page")
    }
    else if (req.url === "/about") {
    res.end("About page");
    }

    else {
        res.end("404 Not Found ❌");
    }

    
})
   
   
server.listen(3000, ()=>{
    console.log("server is running on http://localhost:3000");
    

})