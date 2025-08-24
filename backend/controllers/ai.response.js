const aiservice=require('../services/ai.services.js')

module.exports.getreview=async (req,res)=>{
    const code=req.body.code; // code that we have to review

    if(!code){
        return res.status(400).send("code is required")
    }

    const response=await aiservice(code);
    res.send(response)
}   

