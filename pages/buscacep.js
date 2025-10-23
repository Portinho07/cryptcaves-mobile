import React, { useState } from "react";
import { Alert } from "react-native";
import Text from "../components/text";
import Container from "../components/container";
import Input from "../components/input";
import Button from "../components/button";
import api from "../src/services/api";


export default function Home(){

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')

    const Buscar = async()=>{

        try{

            const response = await api.get(`${cep}/json/`);
            setCep(response.data.cep);
            setLogradouro(response.data.logradouro);
            setBairro(response.data.bairro);
            setLocalidade(response.data.localidade);
            setUf(response.data.uf);

        }catch{

            console.log('Erro de Conexão', Error);

        }

    }

    return(

        <Container>
            <Text txt={"Cep"} />
            <Input placeholder={"Digite o CEP"} placeholdercolor={"white"} value={cep} onChangeText={setCep} />
            <Text txt={"Rua"} />
            <Input placeholder={"Digite sua Rua"} placeholdercolor={"white"} value={logradouro} onChangeText={setLogradouro} />
            <Text txt={"Bairro"} />
            <Input placeholder={"Digite o seu Bairro"} placeholdercolor={"white"} value={bairro} onChangeText={setBairro} />
            <Text txt={"Cidade"} />
            <Input placeholder={"Digite sua Cidade"} placeholdercolor={"white"} value={localidade} onChangeText={setLocalidade} />
            <Text txt={"Estado"} />
            <Input placeholder={"Digite seu Estado"} placeholdercolor={"white"} value={uf} onChangeText={setUf} />

            <Button txt={"Buscar"} onPress={Buscar} />
            
        </Container>

    )

}