import mongoose from "mongoose";


// Our Schema
const studentSchema = new mongoose.Schema({


name:{type:String,required:true , trim:true},
age:{type:Number,required:true , min:18,max:90, trim:true},

fees:{type:mongoose.Decimal128,required:true , validate:(v)=>{v>=5000}},


})

const StudentModel = mongoose.model("student",studentSchema)

export default StudentModel