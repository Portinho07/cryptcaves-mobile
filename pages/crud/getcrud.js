import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState, useCallback, UseFocusEffect } from "react";
import { Text, View, Modal, Button, Alert, FlatList, SafeAreaView } from "react-native";
import api from "../../src/services/api";


export default function GetCrud(){

    const [dados, setDados] = useState ([]);

    const getDados = async ()=>{

        try{

            const getVal = await api.get(`/retorna_users`)
            console.log(getVal.data)
            setDados(getVal.data)

        }catch (error){

            console.error("Erro ao trazer os dados", error)

        }

    }

    useEffect(()=>{

        getDados();

    },[])

   

    const renderItem = ({item})=>(

        <View>
            <Text>{item.id}</Text>
            
        </View>

    )

    const keyExtractor = (item)=>{

        return item.id.toString();

    }

    return(

        <FlatList style={{width:"100%"}} data={dados} renderItem={renderItem} keyExtractor={keyExtractor} />

    )

}