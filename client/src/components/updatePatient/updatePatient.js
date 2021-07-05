import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function UpdatePatient() {
  const classes = useStyles();

  const [patient, setPatient] = useState({
      _id : 0,
      name : '',
      age : '',
      gender : '',
      case : '',
      ward:''
  });

  const updatePatient = (_id) => {
    axios.put(`http://localhost:5000/patients/update-patient/${_id}`, patient).then(() => {
      window.location.reload(false);
    })
  }


  return (
    <>
    <h2> Update Patient </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="User ID" variant="outlined" value = {patient._id} onChange = {(event) => {
        setPatient({...patient, _id: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Name" variant="outlined" value = {patient.name} onChange = {(event) => {
        setPatient({...patient, name: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" value = {patient.age} onChange = {(event) => {
        setPatient({...patient, age: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Gender" variant="outlined" value = {patient.gender} onChange = {(event) => {
        setPatient({...patient, gender: event.target.value})
      }}/>
         <TextField id="outlined-basic" label="Ward" variant="outlined" value = {patient.ward} onChange = {(event) => {
        setPatient({...patient, ward: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Case" variant="outlined" value = {patient.case} onChange = {(event) => {
        setPatient({...patient, case: event.target.value})
      }}/>

        <Button variant="contained" color="primary" onClick = {() => {
                updatePatient(patient._id)
              }}>
          Update
        </Button>
    </form>
    </>
  );
}
