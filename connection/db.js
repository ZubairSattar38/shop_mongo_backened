const mongoose = require('mongoose');

const uri = "mongodb+srv://zubair:Islamabadcity123@cluster0.ht1qm.mongodb.net/ShopProject?retryWrites=true&w=majority";
const connectDB = () =>{
     mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("connected ... ");
}
module.exports = connectDB;



