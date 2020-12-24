import React, { useEffect, useState } from 'react'
import useFetch from '../services/useFetch';
import { useLocation, useParams,useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from '../styles/materialUIStyle';
import PersonIcon from '@material-ui/icons/Person';
import { Grid, Typography } from '@material-ui/core';
import SelectItems from '../component/SelectItems'
import axios from "axios";
import { ContactsOutlined } from '@material-ui/icons';



const UserInfo = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const classes = useStyles();
  const flightRouting = "bookingInfo/?FlightNumber="
  const countryRouting="/country"
  const { id } = useParams();
  const {state} = useLocation();
  const [data, setData] = useState({ flightData: null, countryData: null,isLoading:true });
  const [formData,setFormData]=useState({phoneNumber:'',passport:''});
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const flightData = await axios(baseUrl+flightRouting + id );
      const countryData = await axios('http://localhost:3001/country');
      setData({ flightData: flightData.data, countryData: countryData.data,isLoading:false });
    };
    fetchData();
  }, []);
 
  if (data.isLoading || data.length === 0) return <h1>Loading</h1>
   return (
    <div>
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        style={{ marginTop: "20px" }}
      >
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <Typography variant={"h5"}>
            Hi Mr {data.flightData[0].first_name}
            <span role={"img"} aria-label={"Traveller"}>
              <PersonIcon />
            </span>
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <TextField
            id="txtFirstName"
            label="First Name"
            variant="outlined"
            value={data.flightData[0].first_name}
          />
        </Grid>
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <TextField
            id="txtLastName"
            label="Last Name"
            variant="outlined"
            value={data.flightData[0].last_name}
          />
        </Grid>
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Nationality</InputLabel>
            <Select
              labelId="nationality"
              id="nationality"
              label="Nationality"
            >
             {SelectItems(data.countryData)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <TextField
            id="txtemail"
            label="Email"
            variant="outlined"
            value={data.flightData[0].email}
          />
        </Grid>
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <TextField
            id="txtPhoneNumber"
            label="Phone Number"
            variant="outlined"
            value={formData.phoneNumber}
            onChange={(e)=>{
              setFormData({phoneNumber:e.target.value})
            }}
          />
        </Grid>
        <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
          <TextField
            id="txtPassport#"
            variant="outlined"
            value={formData.passport}
            onChange={(e)=>{
              setFormData({passprt:e.target.value})
            }}
          />
        </Grid>
        <Grid item style={{ marginBottom: "5px", marginTop: "5px" }}>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Accept T&C ."
          />
        </Grid>
        <Grid item style={{ marginBottom: "5px", marginTop: "5px" }}>
          <Button variant="contained" color="primary" onClick={
            ()=>{
              navigate('/Confirmation',{state:{data,formData}});
            }
          }>
            Continue
        </Button>
        </Grid>
      </Grid>
    </div>

  )
}
export default UserInfo