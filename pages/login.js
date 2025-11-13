import React, { useState } from "react";
import { Alert, StyleSheet, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Container from "../components/container";
import Input from "../components/input";
import Button from "../components/button";
import api from "../src/services/api";

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  async function Log() {
    if (!email || !pass) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      setLoading(true);

      // Chama o endpoint do seu Laravel
      const res = await api.post("/login_api", {
        email: email,
        password: pass,
      });

      console.log("RESPOSTA LOGIN:", res.data);

      // Verifica se o backend retornou sucesso
      if (res.data.erro === "n") {
        const { user } = res.data;

        // Salva token e dados do usuário localmente
        await AsyncStorage.setItem("userToken", user.token);
        await AsyncStorage.setItem("userData", JSON.stringify(user));

        Alert.alert("Sucesso", res.data.message || "Login realizado com sucesso!");

        // Redireciona para tela principal (ajuste o nome da tela)
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", res.data.message || "Falha no login.");
      }

    } catch (error) {
      console.log("Erro no Login:", error.response?.data || error.message);

      if (error.response?.status === 403) {
        Alert.alert("Acesso negado", "Usuário não validado, login não permitido.");
      } else if (error.response?.status === 401) {
        Alert.alert("Credenciais inválidas", "E-mail ou senha incorretos.");
      } else {
        Alert.alert("Erro", "Não foi possível fazer login. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Image source={require('../assets/logo_crypt.png')} style={styles.image} />

      <Text style={styles.title}>Logar em uma conta.</Text>

      <Input
        placeholder="Digite o seu e-mail:"
        placeholdercolor="white"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Digite a sua senha:"
        placeholdercolor="white"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <Button
        txt={loading ? "Entrando..." : "Entrar"}
        onPress={Log}
        disabled={loading}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
  },
  title: {
    color: "white",
    position: "absolute",
    left: 50,
    top: 120,
    fontSize: 30,
  },
});
