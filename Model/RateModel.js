import mongoose from "mongoose";
const {Schema}=mongoose;

const RateSchema =new Schema({
    rate:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true,
      
    },
    feedback:{  
        type:String,
        required:true
    }
}, {timestamps:true});      

const RateModel = mongoose.model("Rate", RateSchema);

export default RateModel;