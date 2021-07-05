import PatientData from "../models/patient.js";

export const getPatients= async(req,res)=>{
    try {
        const allPatients=await PatientData.find();

        res.status(200).json(allPatients);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

 export const createPatient =  async(req,res)=>{
    const patient = req.body;
    const newPatient = new PatientData(patient);

    try {
        await newPatient.save();
        res.status(201).json(newPatient);

    } catch (error) {
        res.status(409).json({message:error.message});

    }
}

export const deletePatient =  async(req,res)=>{
   const id = req.params.id;
   try {
     await PatientData.findByIdAndRemove(id).exec();
     res.send('Successfully Deleted!')
   } catch (error) {
    console.log(error);
   }
}

export const updatePatient = async(req,res,next)=>{

  var doc= await PatientData.findById(req.params.id)
  if(req.body.name!=""){
    doc.name=req.body.name
  }
  if(req.body.age!=""){
    doc.age=req.body.age
  }
  if(req.body.gender!=""){
    doc.gender=req.body.gender
  }
  if(req.body.case!=""){
    doc.case=req.body.case
  }
  if(req.body.ward!=""){
    doc.ward=req.body.ward
  }
  


    const update=new PatientData({ 
        _id : req.params.id,
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        case:req.body.case,
        ward:req.body.ward});

        PatientData.findByIdAndUpdate(req.params.id, doc, (error, data) => {
            if (error) {
              return next(error);
            } else {
              return res.json(data);
            }
          })

       /* },
        
       (error, data) => {
        if (error) {
          //return next(error);
          console.log(error)
        } else {
          res.send(data)
          console.log(data)
        }
      })*/
      
}


