import React, { useState } from "react";
import { Text, View, Modal, Button, Alert, SafeAreaView } from "react-native";



export default function Home({navigation}){

    const [ modal,setModal ] = useState(null);

    function Navegar(){

        navigation.navigate("Contact");

    }

    return(

        <SafeAreaView style={{ flex:1, justifyContent:"center", alignItems:"center" }} >

            <Button title="Abrir Modal" onPress={()=>setModal(true)} />

            <Modal
            visible={modal}
            transparent={true}
            animationType={"fade"}
            onRequestClose={()=>setModal(false)}
            >

                <View style={{ flex:1, backgroundColor:"rgba(0,0,0,0.1)", alignItems:"center", justifyContent:"center" }}>

                    <View style={{ flex:0.5, justifyContent:"center", alignItems:"center", backgroundColor:"white", borderRadius:20, width:"50%", height:30 }}>

                        <Text style={{ fontSize:20, padding:20 }} > Oi eu sou uma Modal </Text>
                        <Button title="Navegar" onPress={Navegar} />
                        <Button title="Fechar Modal" onPress={()=>setModal(false)} />

                    </View>

                </View>

            </Modal>

        </SafeAreaView>

    )

}