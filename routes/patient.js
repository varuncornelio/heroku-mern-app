import express from 'express'
import { getPatients,createPatient, deletePatient,updatePatient } from '../controllers/patient.js';
import patient from '../models/patient.js'
const router=express.Router();

router.get('/',getPatients);
router.post('/create-patient',createPatient);
router.put('/update-patient/:id',updatePatient);
router.delete('/delete-patient/:id', deletePatient);

export default router;
