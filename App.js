const express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const collegeModel = require('./collegeModel')
const studentModel = require('./studentModel')

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(Cors())

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/collegeDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/admaddclg",async(request,response)=>{
    let data=request.body
    const college=new collegeModel(data)
    let result=await college.save()
    if (result.clgName!="") {
        response.json({"status":"success"})
    } else {
        response.json({"status":"error"})
    }
})

app.get("/admviewclg",async(request,response)=>{
    let result=await collegeModel.find()
    response.json(result)
})

app.post("/studreg",async(request,response)=>{
    let data=request.body
    const student=new studentModel(data)
    let result=await student.save()
    if (result.clgName!="") {
        response.json({"status":"success"})
    } else {
        response.json({"status":"error"})
    }
})

app.post("/admviewstud",async(request,response)=>{
    let data=request.body.clgName
    let result=await studentModel.find(data)
    response.json(result)

})

app.post("/studlogin",async(request,response)=>{
    let data=request.body
    let getUsername=data.username
    let getPassword=data.password
    let result=await studentModel.find({username:getUsername})
    if (result.length>0) {
        if (result[0].password==getPassword) {
            response.json({"status":"success","data":result[0]})
        } else {
            response.json({"status":"Invalid Username Or Password !!!"})
        }
    } else {
        response.json({"status":"Username Does Not Exist !!!"})
    }
})

app.post("/studviewprofile",async(request,response)=>{
    let data=request.body
    let result=await studentModel.find(data)
    response.json(result)
})


















app.listen(3001,()=>{
    console.log("Server Running")
})