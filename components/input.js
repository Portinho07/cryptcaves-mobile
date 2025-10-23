import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({placeholder, placeholdercolor, value, onChangeText, secureTextEntry, ...rest}){

    return(

        <TextInput style={style_input.input} secureTextEntry={secureTextEntry} placeholder={placeholder} placeholderTextColor={placeholdercolor} value={value} onChangeText={onChangeText} />

    )

}

const style_input = StyleSheet.create({

    input:{

        margin:4,
        color:"white",
        width:"80%",
        height:40,
        borderColor:"#08fd08",
        borderWidth:2,
        borderRadius:10,

    }

})