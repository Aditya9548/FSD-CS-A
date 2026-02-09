//importing the http module
const http = require('http')

//creating a server
const server = http.createServer((req, res) => {
    //setting the response header
    res.write("this is the respose from server")
    res.end();
})

//server listening to port 3000
server.listen((3000), () => {
    console.log("Server is running");
})