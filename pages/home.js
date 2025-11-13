import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate("ChatList"); // troque para a tela que quiser
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />

            <Text style={styles.title}>Seja Bem Vindo(a) ao</Text>
            <Text style={styles.appName}>CryptCave</Text>

            <Text style={styles.subtitle}>
                “A liberdade de se comunicar{"\n"}
                sem limites. Envie suas{"\n"}
                mensagens criptografadas,{"\n"}
                com total anonimato e{"\n"}
                segurança. Seu segredo, só{"\n"}
                seu.”
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
        textAlign: "center",
    },
    appName: {
        color: "#00FF00",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
        textShadowColor: "#0f0",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    subtitle: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        lineHeight: 22,
        marginBottom: 60,
    },
    button: {
        backgroundColor: "#00FF00",
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 30,
        shadowColor: "#0f0",
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
});
