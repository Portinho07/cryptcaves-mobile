import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import api from "../src/services/api";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export default function Usuario() {
    const [dados, setDados] = useState([]);
    const navigation = useNavigation();

    const pegarDados = async () => {
        try {
            const response = await api.get("retorna_users/");
            setDados(response.data);
        } catch (error) {
            console.error("Erro ao retornar os dados:", error);
            Alert.alert("Erro", "Não foi possível carregar os usuários.");
        }
    };

    const deletarUsuario = async (id) => {
        Alert.alert("Excluir Usuário", "Tem certeza que deseja excluir este usuário?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Excluir",
                style: "destructive",
                onPress: async () => {
                    try {
                        await api.delete(`users/${id}`);
                        Alert.alert("Sucesso", "Usuário excluído com sucesso!");
                        pegarDados();
                    } catch (error) {
                        console.error("Erro ao deletar:", error);
                        Alert.alert("Erro", "Não foi possível excluir o usuário.");
                    }
                },
            },
        ]);
    };

    useFocusEffect(
        useCallback(() => {
            pegarDados(); 
        }, [])
    );

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.updateButton}
                    onPress={() => navigation.navigate("UpdateUser", { user: item })}
                >
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deletarUsuario(item.id)}
                >
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuários Logados</Text>
            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    title: {
        color: "#00FF00",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        textShadowColor: "#0f0",
        textShadowRadius: 8,
    },
    card: {
        backgroundColor: "#111",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#00FF00",
    },
    nome: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    email: {
        color: "#aaa",
        fontSize: 14,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    updateButton: {
        backgroundColor: "#00FF00",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    deleteButton: {
        backgroundColor: "#8B0000",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
