import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, Alert, SafeAreaView } from "react-native";


export default function InsertCrud(){

    const [nome, setNome] = useState ("");
    const [sobrenome, setSobrenome] = useState ("");

    const setDados = async ()=>{

        try{

            // const dados = {nome, sobrenome}
            const insertDados = await api.post("", {nome, sobrenome})

            Alert.alert("Sucesso!","Dados inseridos com sucesso!")

            setNome("");
            setSobrenome("");
            
        }catch (error){

            console.error("Erro ao inserir dados", error)
            
        }

    }

    return(

        <View>
            
        </View>

    )

}