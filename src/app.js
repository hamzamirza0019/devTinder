const express = require("express");

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello Hamza!");
});

app.get("/hello", (req, res)=>{
    res.send("Hello hello hello!");
});


app.get("/test", (req, res)=>{
    res.send("Hello from the server. Test is passed!");
});


app.listen(9999, ()=>{
    console.log("Server is successfully listening on port 9999....")
})