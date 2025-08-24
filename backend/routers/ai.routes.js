const express=require('express')
const airesponse=require('../controllers/ai.response.js')

const router=express.Router();

router.post('/get-review',airesponse.getreview);

module.exports=router