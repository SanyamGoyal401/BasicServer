const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.get("/", (request, response) => {
    console.log(request);
    response.sendFile(path.join(__dirname, "index.html"));
})
app.get("/success", (request, response)=> {
    response.sendFile(path.join(__dirname, "success.html"));
})

app.get("/failure", (request, response)=>{
    response.sendFile(path.join(__dirname, "failure.html"));
})
app.post("/submit", (req, res)=>{
    console.log(req.body.name);
    console.log(req.body.pass);
    //console.log(__dirname);
    if(req.body.pass === "Admin@123"){
        res.redirect("/success");
    }
    else{
        res.redirect("/failure");
    }
})

app.listen(8000);