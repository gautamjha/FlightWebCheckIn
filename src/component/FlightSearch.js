import React, {useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import getUserDetail from '../services/userServices'
import useStyles from '../styles/materialUIStyle';
import TextField from '@material-ui/core/TextField';
import { Grid, Typography } from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';


export default function FlightSearch() {
    const navigate = useNavigate();
    const [flightNumber, setFlightnumber] = useState('')
    const [Lastname, setLastName] = useState('')
    const [userInfo, setUserInfo] = useState([]);
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                direction={"column"}
                alignItems={"center"}
                style={{ marginTop: "10vh" }}
            >
                <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
                    <Typography variant={"h5"} data-testid="header">
                        Welcome to Web check in!
                            <span role={"img"} aria-label={"Flight"}>
                            <FlightTakeoffIcon />
                        </span>
                    </Typography>
                </Grid>
            </Grid>
            <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
                <TextField
                    id="txtFlightNumber"
                    label="PNR#"
                    variant="outlined"
                    value={flightNumber}
                    onChange={event => setFlightnumber(event.target.value)}
                    placeholder="Flight#"
                />
            </Grid>
            <Grid item style={{ marginBottom: "10px", marginTop: "10px" }}>
                <TextField
                    id="txtLastName"
                    label="Last name"
                    variant="outlined"
                    value={Lastname}
                    onChange={event => setLastName(event.target.value)}
                    placeholder="Last name"
                />
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
                <Button variant="contained" color="primary"
                    onClick={() => {
                        getUserDetail(flightNumber).then((result) => {
                            if (result.length > 0)
                                navigate(`/UserInfo/${flightNumber}`, {state:{result}})
                        })
                    }}>
                    Search Flight
                   </Button>
            </Grid>

        </>)
}

