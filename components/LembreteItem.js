import React from 'react';
import {
    View,
    Text,
    StyleSheet,

    TouchableOpacity
} from 'react-native'

const LembreteItem = (props) => {

    return (
        <TouchableOpacity
            onLongPress={() => props.onApagarLembrete(props.indice)}
        >

            <View style={estilos.itemNaLista}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#DDD',
        borderBottomColor: "#000",
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 7,
        borderRadius: 7,
    }
})

export default LembreteItem;