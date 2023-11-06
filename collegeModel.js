const mongoose=require('mongoose')
const collegeModel=mongoose.model("collegs",mongoose.Schema(
    {
        clgName:{type:String,required:true},
        clgAddress:String,
        clgPhNo:String,
        clgHODName:String,
        clgHODPhNo:String,
        clgFacInCharge:String,
        clgFacPhNo:String,
        username:String,
        password:String

    }
))
module.exports=collegeModel