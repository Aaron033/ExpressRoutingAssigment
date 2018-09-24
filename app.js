var express = require("express"); 
var app = express(); 

app.get("/", function(req, res) {
    res.send("Hi there!"); 
})

app.get("/bye", function(req, res) {
    res.send("GoodBye!!"); 
    
}); 

app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /DOG!!!") 
    res.send("WOUCH"); 
});

// 
app.get("*", function(req, res){
    res.send("You Are A Star!!!"); 
})


//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!"); 
});



