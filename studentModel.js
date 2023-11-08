const mongoose=require('mongoose')
const studentModel=mongoose.model("students",mongoose.Schema(
    {
        _id:mongoose.Schema.ObjectId,
        clgName:{type:mongoose.Schema.Types.ObjectId,ref:'collegs'},
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