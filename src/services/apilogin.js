import React from 'react';
import axios from 'axios';


const api = axios.create({

  baseURL: 'http://127.0.0.1:8000/api',

});

export const registerUser = async (userData) => {

  try {

    const response = await api.post('/register', userData);
    
    console.log(response)
    
    return response.data;

  } catch (error) {

    console.error("Erro ao cadastrar:", error);
    
    throw error;

  }

};

export const loginUser = async (credentials) => {

  try {

    const response = await api.post('/login', credentials);

    return response.data;

  } catch (error) {

    console.error("Erro ao fazer login:", error);

    throw error;

  }

};