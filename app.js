var express   = require("express")
var mongoose  = require("mongoose")
var app       = express()



//=====mongo setup=======

const { Db } = require('mongodb');
mongoose.connect('mongodb://localhost:27017/elearn', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

//=======================




app.listen(3333,()=>{
    console.log("Listening at 3333!!")
})
