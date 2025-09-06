// express lai socket sanga we cant directly do app.listen
import http from "http"
import path from "path"
import express from "express"
import { Server } from "socket.io";
const app=express();
const server=http.createServer(app);
const io=new Server(server);// we passed our http serverto socket.io, now socket.io can listen for websocket connections
//this "Server" which is front socket.io knows how to handle websocket connections on top of the http server we gave it

// it attaches UPGRADE WEBSOCKET event listener to our http 
// updgrade header aaune front bata honta

// socket io
io.on("connection",(manxey)=>{
    // io.on("connection" Runs whenever a new client (browser) connects via Socket.IO.
    // manxey represents the connected client socket
    console.log("a new user has connected",manxey.id)
    //manxey.id:unique id of the connected socket
manxey.on("manxeykomessage",(message)=>{
    // listens to custom message from client, manxeykomessage this is same uta front ma pani
io.emit("message",message);
// yedi front end bata message sabai io lai send garde user lai send garde
    console.log(message);
});
})

server.listen(9000,()=>{
    console.log("Server started");   
})
app.use(express.static(path.resolve("./public")))
// It tells Express: “Look inside the /public directory and serve any files directly to the browser.”

//this" get" doesnt actually matter rn, it will just serve that stati
// app.get("/",(req,res)=>{
//     res.send("haha") 
//     // res.sendFile
// })
