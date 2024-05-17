const express =require("express");

const app=express();
app.get("/",(req,res)=>
{
    res.send("<h1> Hello in home </h1>");

})

app.listen(8000,()=>
{
    console.log("in port 8000");
})