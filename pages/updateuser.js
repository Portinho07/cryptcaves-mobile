import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import api from "../src/services/api";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function UpdateUser() {
    const navigation = useNavigation();
    const route = useRoute();
    const { user } = route.params;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");

    const atualizar = async () => {
        try {
            const data = { name, email };
            if (password.trim() !== "") {
                data.password = password;
            }

            await api.put(`users/${user.id}`, data);
            Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
            navigation.navigate("Usuario");
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            Alert.alert("Erro", "Não foi possível atualizar o usuário.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizar Usuário</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Nova senha (opcional)"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.saveButton} onPress={atualizar}>
                <Text style={styles.saveText}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
        paddingTop: 60,
    },
    title: {
        color: "#00FF00",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 25,
        textShadowColor: "#0f0",
        textShadowRadius: 8,
    },
    input: {
        backgroundColor: "#111",
        color: "#fff",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#00FF00",
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: "#00FF00",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    saveText: {
        color: "#000",
        fontWeight: "bold",
    },
    cancelButton: {
        backgroundColor: "#222",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    cancelText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
