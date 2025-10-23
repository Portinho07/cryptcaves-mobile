import React from "react";
import axios from "axios";


const api = axios.create({

    baseURL:"http://10.122.41.182:8000/api"
    //baseURL:"https://jsonplaceholder.typicode.com/"
    

})

export default api;