const mongoose=require('mongoose')
const studentModel=mongoose.model("students",mongoose.Schema(
    {
        clgName:{type:String,required:true},
        studName:String,
        studAdmNo:String,
        studCurrSem:String,
        studDept:String,
        studPhNo:String,
        studEmailId:String,
        studPass:String
    }
))
module.exports=studentModel