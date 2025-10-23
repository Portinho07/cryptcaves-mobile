import React from "react";
import { View, StyleSheet } from "react-native";



export default function Container({children}){
    return(

        <View style={style_container.cont}>{children}</View>

    )
}

const style_container = StyleSheet.create({

    cont:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
    }

})