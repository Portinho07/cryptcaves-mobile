import React, { useState } from "react";
import { Alert, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Container from "../components/container";
import Texto from "../components/text";
import Input from "../components/input";
import Button from "../components/button";
import api from "../src/services/api";


export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function Log() {

        

        
        //const res = await api.get(`/login_api/`)

       
        
    }

    return (

        <Container>
            <Image source={require('../assets/logo_crypt.png')} style={styles.image} />

            <Text style={{ color: "white", position: "absolute", left: 50, top: 120, fontSize: 30 }} >Logar em uma conta.</Text>

            {/* <Text style={{ color: "white", position: "absolute", left: 50, top: 200, fontSize: 20 }} >
                Não tem uma conta? <TouchableOpacity style={{ marginTop: 12, }} onPress={() => navigation.navigate("Cadastro")}> <Text style={{ color: "#08fd08", fontSize: 20, }} > Criar </Text> </TouchableOpacity>
            </Text> */}

            {/* <Input placeholder={"Digite o seu nome:"} placeholdercolor={"white"} value={nome} onChangeText={setNome} /> */}
            {/* <Input placeholder={"Digite o seu sobrenome:"} placeholdercolor={"white"} value={sobrenome} onChangeText={handleSobrenomeChange} /> */}
            <Input placeholder={"Digite o seu e-mail:"} placeholdercolor={"white"} value={email} onChangeText={setEmail} />
            <Input placeholder={"Digite a sua senha:"} placeholdercolor={"white"} secureTextEntry={true} value={pass} onChangeText={setPass} />
            <Button txt={"Entrar"} onPress={Log} />
        </Container>

    )

};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 100,
        resizeMode: 'contain',
        position: "absolute",
        top: 0,
        right: 100,
    },
});