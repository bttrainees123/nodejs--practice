 const mongoose = require ('mangoose')

 const connectionDB = async ()=>{
    
    try{
       const conn = await mongoose.connect   ('mongodb://localhost:27017/expressjs')
       console.log(`this is connected ${conn.connection.host}`)
    }catch(error){
        console.log(`this is error message ${error.message}`);
        process.exit(1);
    }
 }
 module.exports = connectionDB;