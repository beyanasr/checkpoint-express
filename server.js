const express = require("express");
const app = express();
const port = 5000;
const verifTime = require("./middleware/time");

const path=require('path') 

app.get('/',verifTime,(req,res)=>{ res.sendFile(path.join(__dirname,'components','Home.html'))})

app.get('/Home.html',(req,res)=>res.sendFile(__dirname,'components','Home.html'))
app.get('/Contact.html',(req,res)=>res.sendFile('G:\Nouveau dossier\school stuff\GOMYCODE\checkpoint-Express\components\Contact.html'))
app.get('/Service.html',(req,res)=>res.sendFile('G:\Nouveau dossier\school stuff\GOMYCODE\checkpoint-Express\components\OurServices.html'))

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
