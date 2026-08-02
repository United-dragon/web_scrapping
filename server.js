const express=require("express")
const app=express()
app.get("/",async(req,res)=>{
    res.send("Welcome to server");
});
app.listen(3000,()=>{
    console.log("Welcome to localhost:3000");
});