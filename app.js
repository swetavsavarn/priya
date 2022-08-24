const express=require('express')
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser')
const router=require('./router')
app.use(cors())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)


app.listen(3000)