import React, { useState } from 'react';

import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');

    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    }
    const adicionarLembrete = (lembrete) => {
        props.onAdicionarLembrete(lembrete);
        setLembrete('');    
    }

    return (
        <View style={estilos.lembreteView}>
            <TextInput placeholder="Lembrar..."
                style={estilos.lembreteTextInput}
                onChangeText={capturarLembrete}
                value={lembrete}
            />
            <Button
                title="Adicionar"
                onPress={() => adicionarLembrete(lembrete)}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    lembreteView: {
        marginBottom: 7
    },
    
    lembreteTextInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 7,
        padding: 7
    }

})

export default LembreteInput;