import React from "react";
import { Text, StyleSheet } from "react-native";



export default function Texto({txt}){

    return(

        <Text style={style_txt.txt}>{txt}</Text>

    )

}

const style_txt = StyleSheet.create({

    txt:{

        alignSelf:"stretch",
        fontSize:30,
        color:"white",
        marginLeft:50,

    }

})