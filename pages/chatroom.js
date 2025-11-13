import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function ChatRoom({ route }) {
    const { user } = route.params;
    const [messages, setMessages] = useState([
        { id: 1, text: `Olá, eu sou ${user.name}.`, sender: "anon" },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessage = { id: Date.now(), text: input, sender: "me" };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        // Resposta automática (simulação de IA)
        setTimeout(() => {
            const replies = [
                "Interessante... conte-me mais 👀",
                "Haha, sério isso? 😂",
                "Eu também acho isso!",
                "Uau, não esperava por essa!",
                "Hmm... curioso 🤔",
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            setMessages((prev) => [
                ...prev,
                { id: Date.now(), text: randomReply, sender: "anon" },
            ]);
        }, 1200);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{user.name}</Text>

            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageBubble,
                            item.sender === "me" ? styles.myMessage : styles.theirMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma mensagem..."
                    placeholderTextColor="#999"
                    value={input}
                    onChangeText={setInput}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendText}>➤</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000", padding: 10, paddingTop: 40 },
    header: {
        color: "#00FF00",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    messageBubble: {
        padding: 10,
        borderRadius: 12,
        marginVertical: 5,
        maxWidth: "80%",
    },
    myMessage: {
        backgroundColor: "#00FF00",
        alignSelf: "flex-end",
    },
    theirMessage: {
        backgroundColor: "#111",
        alignSelf: "flex-start",
    },
    messageText: {
        color: "#fff",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111",
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
    },
    input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: "#00FF00",
        borderRadius: 50,
        padding: 10,
        marginLeft: 5,
    },
    sendText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
});
