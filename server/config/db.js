const mongoose = require('mongoose'); 
const mongoConn = require("dotenv").config()
const connectDb = async ()=>{
   try {
      const conn =  await mongoose.connect(mongoConn.parsed.mongoURL)
      console.log(`Database is connected`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }

}

module.exports = connectDb;