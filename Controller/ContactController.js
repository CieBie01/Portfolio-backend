import Contact from '../Model/ContactModel.js';
const ContactController = async(req,res)=>{
const {whatsAppNumber, email, message} = req.body;
if(!whatsAppNumber || !email || !message){
    return res.status(400).send({ error: "All fields are required" });
}
try{
    const newContact = new Contact({
        whatsAppNumber,
        email,
        message
    });
    await newContact.save();
    res.status(201).send({ message: "Contact information saved successfully" });
}catch(err){
res.status(500).send({ error: "Internal server error" });
}

}
export default ContactController;