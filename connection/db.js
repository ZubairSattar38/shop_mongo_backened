const mongoose = require('mongoose');

const uri = "mongodb+srv://zubair:Islamabadcity@cluster0.cgek5.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = () =>{
     mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("connected ... ");
}
module.exports = connectDB;



