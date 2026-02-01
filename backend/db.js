const mongoose =require('mongoose')

const mongoURL ="mongodb://localhost:27017/"

const connectToMongo=async()=>{
  try{
    await mongoose.connect(mongoURL)
    console.log("connected")
  }
  catch(error){
    console.log("failed",error.message)
  }
     
}

module.exports=connectToMongo;