
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function init() {
            const response = await axios(url)
            setData(response.data)
            setLoading(false)
        }
        init();
    },[url]);
    console.log(data);
    return {data:data,isLoading:loading}
}