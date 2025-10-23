import React, { useEffect, useState } from "react";
import { Text, View, Modal, Button, Alert, FlatList, SafeAreaView } from "react-native";


export default function UpdateCrud({route, navigation}){

    const {item} = route.params;

    const [nome, setNome] = useState (item.nome);
    const [sobrenome, setSobrenome] = useState (item.sobrenome);

    const updateDados = async ()=>{

        try{

            const upDados = await api.put(`${item.id}`, {nome, sobrenome})

            Alert.alert("Sucesso!","Dados atualizados com sucesso")
            navigation.navigate("GetCrud");
            
        }catch (error){

            console.error("Erro ao atualizar os dados!", error)
            
        }

    }

    return(

        <View>

        </View>

    )

}