const mongoose=require('mongoose')
const validator=require('validator')


const UserSchema=new mongoose.Schema({

      username:{
             type:String,
             trim:true,
             required:true,
             unique:true
      },
      password:{
          type: String,
          trim:true,
          required:true,
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
      type:{
          type:String,
          require:true
        }
})


module.exports=mongoose.model('User',UserSchema)