const mongoose=require('mongoose')
const validator=require('validator')


const classSchema= new mongoose.Schema({

       title:{
           type:String,
           required:true,
           trim:true
       },
       image:{
           type:String,
           required:true,
       },
       instructor:String,
       description:String,
       lessons:[
           {
               lectureNumber:String,
               lectureTitle:String,
               lectureBody:String
           }
       ]
})



module.exports=mongoose.model('Class',classSchema)