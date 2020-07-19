const express=require('express')
const bodyparser= require('body-parser')
const PORT=3000;
const app=express()
app.use(bodyparser.json())

app.get('/', function(req,res){
    res.send("hello from server")
})
app.listen(PORT,()=>{
    console.log('server running on localhost:'+PORT)
})