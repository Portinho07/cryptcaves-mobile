import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Container from "../components/container";
import Input from "../components/input";
import Button from "../components/button";
//import Texto from "../components/text";
import api from "../src/services/api";
import axios from "axios";
import { useNavigation } from '@react-navigation/native'; // For functional components


export default function Cadastro() {
  const navigation = useNavigation(); // ✅ Mova pra cá

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function Cadastrar() {
    try {
      const userData = {
        name: nome,
        email: email,
        password: pass,
      };

      const res = await api.post(`/register_api`, userData);

      Alert.alert("Sucesso", "Cadastro realizado com sucesso! Bem-vindo(a).");

      navigation.navigate("Login"); // ✅ Agora pode usar sem erro
      
    } catch (error) {
      console.error("Erro no Cadastro", error);
    }
  }

  return (
    <Container>
      <Image source={require('../assets/logo_crypt.png')} style={styles.image} />
      <Text style={{ color: "white", position: "absolute", left: 50, top: 120, fontSize: 30 }}>
        Criar uma conta.
      </Text>

      <Input placeholder={"Digite o seu nome:"} placeholdercolor={"white"} value={nome} onChangeText={setNome} />
      <Input placeholder={"Digite o seu e-mail:"} placeholdercolor={"white"} value={email} onChangeText={setEmail} />
      <Input placeholder={"Digite a sua senha:"} placeholdercolor={"white"} secureTextEntry={true} value={pass} onChangeText={setPass} />

      <Button txt={"Cadastrar"} onPress={Cadastrar} />
    </Container>
  );
}

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