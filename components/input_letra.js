import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";


//export default function CampoApenasLetras

const CampoApenasLetras = () => {

    const [texto, setTexto] = useState('');

    const handleTextoChange = (novoTexto) => {

        const textoFiltrado = novoTexto.replace(/[^\p{L}\s]/gu,'');
        setTexto(textoFiltrado);

    };

}