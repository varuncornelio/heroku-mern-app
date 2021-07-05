import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ShowPatientS() {
  const classes = useStyles();

  const [patientsList, setPatientList] = useState([])

  const deletePatient = (_id) => {
    axios.delete(`http://localhost:5000/patients/delete-patient/${_id}`).then( () => {
      window.location.reload(false);
    })
  }
  useEffect( () => {
    axios.get('http://localhost:5000/patients').then( (allPatients) => {
      setPatientList(allPatients.data);
    } )
  }, [])
  return (
    <>
    <h2> Show Patients </h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">User ID</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Ward</TableCell>
            <TableCell align="right">Case</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientsList.map((patient,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {patient.name}
              </TableCell>
              <TableCell align="right">{patient._id}</TableCell>
              <TableCell align="right">{patient.age}</TableCell>
              <TableCell align="right">{patient.gender}</TableCell>
              <TableCell align="right">{patient.ward}</TableCell>
              <TableCell align="right">{patient.case}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete"  color="primary" onClick={() => {
                deletePatient(patient._id)
              }}>
                <DeleteIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
