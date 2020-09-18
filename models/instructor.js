const mongoose=require('mongoose')
const validator=require('validator')



const instructorSchema = mongoose.Schema({
    
    name:{
           type:String,
           trim:true
    },
    username: {
      type: String,
      unique:true
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
    classes:[{
      classId:{
          type: [mongoose.Schema.Types.ObjectId],
          ref:'Class'
          
        },
      classTitle:String,
    }]
  })

  module.exports=mongoose.model('Instructor',instructorSchema)