import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const users = [
    { id: "1", name: "Anônimo 1" },
    { id: "2", name: "Anônimo 2" },
    { id: "3", name: "Anônimo 3" },
    { id: "4", name: "Anônimo 4" },
    { id: "5", name: "Anônimo 5" },
];

export default function ChatList() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>CryptCave</Text>
            <Text style={styles.title}>Chats</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.chatItem}
                        onPress={() => navigation.navigate("ChatRoom", { user: item })}
                    >
                        <Image
                            source={{ uri: "https://via.placeholder.com/50" }}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.preview}>Toque para conversar</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    appName: {
        color: "#00FF00",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
        textShadowColor: "#0f0",
        textShadowRadius: 10,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 20,
    },
    chatItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    name: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    preview: {
        color: "#aaa",
        fontSize: 13,
    },
});
