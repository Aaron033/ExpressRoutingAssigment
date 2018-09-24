app.get("/dog", function(req, res){
    console.log("SOMEONE MADE A REQUEST TO /DOG!!!") 
    res.send("WOUCH"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started"); 
});

