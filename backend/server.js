const express=require("express")
const routes=require('./routers/ai.routes')
const cors=require('cors')
require("dotenv").config()
const app=express();

app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/ai',routes)

app.listen(3000,()=>{
    console.log("server listning at port 3000")
})