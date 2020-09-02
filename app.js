const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const fs = require("fs");
const mysql = require("mysql");

const User = require("./models/user")


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


 app.get("/user", async(req, res) => {
    User.findAll({})
    .then((user)=>{
        res.json(user);
    })
    .catch((error)=>{
        res.json({ error:error });
    })
    
});

app.post("/user",async (req, res) => {
    if(req.body)
    {
    User.create(req.body)
    .then((user)=>{
        res.json(user);
    })
    .catch((error)=>{
        res.json({ error:error });
    })
}else{res.send("enter name");}
  });

app.delete("/user/:id",async (req, res) => {

    User.destroy(
            { where:{id : req.params.id } }    
      
       ).then(user=>{
           res.json(user);
       }).catch(err=>{
           res.send(err)
       })
})



app.put("/user/:id",async (req, res) => {

    User.update(
        // Set Attribute values 
            { Name: req.body.Name},
        // Where clause / criteria 
            { where:{id : req.params.id } }    
      
       ).then(user=>{
           res.json(user);
       }).catch(err=>{
           res.send(err)
       })
})
















app.listen(port, () => console.log(`app listening on port ${port}!`));