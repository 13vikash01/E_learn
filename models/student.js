var mongoose = require("mongoose")
var validator=require('validator');


const studentSchema = mongoose.Schema({
    
    name:{
           type:String,
           trim:true,
           required:true
    },
    username: {
      type: String,
      required:true
    },
    email:
    {
      type:String,
      required:true,
      unique:true,
      
      validate: {
          validator: function(value) {
            return validator.isEmail(value);
          },
          message: "email is not valid."
        }
    },
    classes:
    [
        {
         classId:
              {
               type: [mongoose.Schema.Types.ObjectId],
               ref:'Class',
              },
         classTitle: String,
       }
   ]
  });


  module.exports=mongoose.model('Student',studentSchema)