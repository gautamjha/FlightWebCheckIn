import axios from "axios";
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const flightRouting="bookingInfo/"
export default async function getUserDetail(pnrNumber){
    const response=await axios(baseUrl+flightRouting+"?FlightNumber="+pnrNumber);
    if(response.status===200) return response.data
};
