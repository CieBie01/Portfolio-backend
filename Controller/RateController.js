import {RateModel} from '../Model/RateModel.js';
const RateController = async (req,res)=>{
  const { rate, name, feedback}=req.body
    if (!rate || !name || !feedback) {
        return res.status(400).json({ error: "All fields are required" });
    }

   

    try{
     const exist = await RateModel.findOne({ name: name });
     if (exist) {
        return res.status(400).json({ error: "You have already submitted your feedback " });
     }
     const newRate = new RateModel({rate,name,feedback});
     await newRate.save()
     return res.status(201).json({ message: "Feedback submitted successfully" });
    }catch (error) {
        console.error("Error saving feedback:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}