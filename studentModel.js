const mongoose=require('mongoose')
const studentModel=mongoose.model("students",mongoose.Schema(
    {
        clgName:String,
        studName:{type:String,required:true},
        studAdmNo:String,
        studCurrSem:String,
        studDept:String,
        studPhNo:String,
        studEmailId:String,
        studPass:String
    }
))
module.exports=studentModel