import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";


export default function Button({onPress, txt}){

    return(

        <TouchableOpacity style={style_btn.btn} onPress={onPress}>
            <Text style={style_btn.txt_btn}>
                {txt}
            </Text>
        </TouchableOpacity>

        

    )

}

const style_btn = StyleSheet.create({

    btn:{

        marginTop:10,
        width:"30%",
        height:30,
        borderColor:"#08fd08",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#08fd08",
        alignItems:"center",
        justifyContent:"center",
        
    },

    txt_btn:{

        color:"white",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",

    }

})