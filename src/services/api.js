import React from "react";
import axios from "axios";


const api = axios.create({

    baseURL:"http://10.122.41.192:8000/api"
    //baseURL:"https://68fa0f2cef8b2e621e7e9c70.mockapi.io/"
    

})

export default api;