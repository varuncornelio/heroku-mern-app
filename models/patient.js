import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    _id: Number,
    name:String,
    gender:String,
    age:Number,
    ward:String,
    case: String


});

const patient = mongoose.model('patient',patientSchema);

export default patient;
