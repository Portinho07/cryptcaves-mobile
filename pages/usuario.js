import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Container from "../components/container";
import api from "../src/services/api";
//import Button from "../components/button";
import Texto from "../components/text";   


export default function Usuario() {

    const [dados, setDados] = useState([]);


    const pegarDados = async ()=>{

        try {
            const response = await api.get("/retorna_users");
          
        setDados(response.data);
            
        } catch (error) {
            
            console.error("Erro ao retornar os dados", error);

        }

    }

    useEffect(()=>{

pegarDados();


    },[])

    const renderItem = ({item})=>(
<View style={{flex:1, justifyContent:"center",alignItems:"center", backgroundColor:"black", borderWidth:2, borderColor:"#ffff"}}>
<Text style={{color:"white"}} >{item.id}</Text>
</View>
    )


    const keyExtractor = (item)=>{

        return item.id.toString();


    }
    
    
    return (
        
            <FlatList style={{ width:"100%"}}
            data={dados}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            
            />
        
    );
}
