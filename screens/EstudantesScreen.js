import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AnaBeatrizSilvaSVG from '../assets/AnaBeatrizSilvaSVG.jsx';
import CarlaMendesSantosSVG from '../assets/CarlaMendesSantosSVG.jsx';
import DanielCostaPereiraSVG from '../assets/DanielCostaPereiraSVG.jsx';
import EduardoRibeiroAlvesSVG from '../assets/EduardoRibeiroAlvesSVG.jsx';
import FernandaOliveiraSVG from '../assets/FernandaOliveiraSVG.jsx';
import GustavoMartinsSVG from '../assets/GustavoMartinsSVG.jsx';
import TopFlex from "../components/TopFlex";
import SearchContainer from "../components/SearchContainer";
import EstudanteElemento from "../components/EstudanteElemento";
import MenuInferior from '../components/MenuInferior.js';

function Estudantes() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <TopFlex titulo='Estudantes'/>
            <SearchContainer />
            <ScrollView style={styles.scrollView}>
                <EstudanteElemento 
                    fotoEstudante={AnaBeatrizSilvaSVG} 
                    nomeEstudante="Ana Beatriz Silva" 
                />
                <EstudanteElemento 
                    fotoEstudante={CarlaMendesSantosSVG} 
                    nomeEstudante="Carla Mendes Santos" 
                />
                <EstudanteElemento 
                    fotoEstudante={DanielCostaPereiraSVG} 
                    nomeEstudante="Daniel Costa Pereira" 
                />
                <EstudanteElemento 
                    fotoEstudante={EduardoRibeiroAlvesSVG} 
                    nomeEstudante="Eduardo Ribeiro Alves" 
                />
                <EstudanteElemento 
                    fotoEstudante={FernandaOliveiraSVG} 
                    nomeEstudante="Fernanda Oliveira" 
                />
                <EstudanteElemento 
                    fotoEstudante={GustavoMartinsSVG} 
                    nomeEstudante="Gustavo Martins" 
                />
            </ScrollView>
            <MenuInferior overviewProp={false} calendarProp={true}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default Estudantes;
