import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EstudanteElemento({ fotoEstudante: FotoEstudante, nomeEstudante }) {
    return (
        <View style={styles.estudanteElementoContainer}>
            <FotoEstudante width={40} height={40} />
            <Text style={styles.nomeEstudante}>{nomeEstudante}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    estudanteElementoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 8,
        borderColor: '#C6C6C6',
        borderBottomWidth: 1,
    },
    nomeEstudante: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
    },
});

export default EstudanteElemento;
