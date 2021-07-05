import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Patient from './components/showPatient/showPatient.js';
import Create from './components/createPatient/createPatient.js';
import Update from './components/updatePatient/updatePatient.js';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <Container maxWidth = "lg">
      <AppBar className = {classes.appBar} position="static" color="inherit">
        <Typography className = {classes.heading} variant="h2" align="center"> Patient Details </Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Patient />
              </AppBar>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Create />
              </AppBar>
            </Grid>
            <Grid item xs={12} sm={7}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Update />
              </AppBar>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </div>
  );
}

export default App;
