const express=require('express')
const router=express.Router()
const comtroller=require('./controller')
router.post('/data',comtroller.bakayti)

module.exports=rou