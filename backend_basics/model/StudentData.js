const mongoose=require('mongoose');

//  create a schema
const StudentSchema=mongoose.Schema({
    fName:String,
    age:Number,
    location:String
})

const StudentData=mongoose.model('studentdetail',StudentSchema);

module.exports=StudentData 