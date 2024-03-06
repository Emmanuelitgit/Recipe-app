import mongoose from "mongoose";

export const dbConnection = async()=>{
    try {
       mongoose.connect("mongodb://localhost:27017/school", {
          useNewUrlParser: true,
          useUnifiedTopology: true
          })
    } catch (error) {
        console.log(error)
    }
}