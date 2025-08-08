import mongoose from "mongoose";

const { Schema } = mongoose;

const ContactSchema = new Schema({
    whatsAppNumber: {
        type: String,
        required: true,
       
    },  
    email: {
        type: String,
        required: true,
       
    },
    message: {
        type: String,
        required: true, 
    }
}, { timestamps: true });  
 
const ContactModel = mongoose.model("Contact", ContactSchema);

export default ContactModel;  
