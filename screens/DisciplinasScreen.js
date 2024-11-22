import TopFlex from "../components/TopFlex";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import SearchContainer from "../components/SearchContainer";
import Icon from 'react-native-vector-icons/Ionicons';
import LuizHenriqueLimaSVG from "../assets/LuizHenriqueLimaSVG";
import MenuInferior from "../components/MenuInferior";

function Disciplinas(){
    const navigation=useNavigation();
    const [expandedCards, setExpandedCards] = useState({
        1: true,  // Garantir que o primeiro card está expandido por padrão
    });

    const toggleExpand = (id) => {
        setExpandedCards(() => ({}));
        setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    };

  const data = [
    { id: 1, subject: 'Matemática', topic: 'Álgebra', teacher: 'Luiz Henrique Lima' },
    { id: 2, subject: 'Geografia', topic: 'Humana', teacher: 'Luiz Henrique Lima' },
    { id: 3, subject: 'Biologia', topic: 'Bioquímica', teacher: 'Luiz Henrique Lima' },
    { id: 4, subject: 'Português', topic: 'Redação', teacher: 'Luiz Henrique Lima' },
  ];

    return(
        <SafeAreaView style={styles.container}>
            <TopFlex titulo='Disciplinas'/>
            <SearchContainer />
            <ScrollView style={styles.cardContainer}>
                {data.map((item, index) => (
                    <TouchableOpacity
                    key={item.id}
                    onPress={() => toggleExpand(item.id)} // Alterar para alternar a expansão ao clicar
                    >
                    <View style={[styles.card, expandedCards[item.id] ? styles.activeCard : styles.inactiveCard]}>
                        <View style={styles.cardHeader}>
                            <Text style={[styles.subject, expandedCards[item.id] && styles.activeSubject]}>{item.subject}</Text>
                            <Text style={[styles.topic, expandedCards[item.id] && styles.activeTopic]}>{item.topic}</Text>
                            <Icon
                                name={expandedCards[item.id] ? 'chevron-down-circle-outline' : 'chevron-forward-circle-outline'}
                                size={20}
                                color={expandedCards[item.id] ? 'white' : 'black'} // Mudar a cor do ícone
                                style={styles.chevron}
                            />
                        </View>
                        <View style={styles.cardBody}>
                            <LuizHenriqueLimaSVG/>
                            <Text style={[styles.teacher, expandedCards[item.id] && styles.activeTeacher]}>
                            {item.teacher}
                            </Text>
                        </View>
                    </View>
                    {expandedCards[item.id] && (
                        <View style={styles.expandedContent}></View> // Mostrar conteúdo expandido
                    )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <MenuInferior overviewProp={false} calendarProp={true}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    cardContainer:{
        marginTop: 20,
    },
    card: {
      borderTopStartRadius: 8,
      borderTopEndRadius: 8,
      padding: 16,
      marginBottom: 0,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    activeCard: {
      backgroundColor: '#E91E63',
    },
    inactiveCard: {
      backgroundColor: '#F5F5F5',
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subject: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginRight: 10,
    },
    activeSubject: {
      color: '#FFF',
    },
    topic: {
      fontSize: 14,
      color: '#212525',
      marginHorizontal: 0,
    },
    activeTopic:{
        color: '#FFF',
    },
    cardBody: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    teacher: {
      fontSize: 14,
      marginLeft: 8,
      color: '#757575',
    },
    activeTeacher: {
      color: '#FFF',
    },
    expandedContent: {
      marginTop: 0,
      backgroundColor: '#FFF',
      borderTopWidth: 0,
      borderBottomEndRadius: 8,
      borderBottomStartRadius: 8,
      height: 100,
      borderColor: 'rgba(198, 198, 198, 1)',
      borderWidth: 1,
    },
    chevron:{
        position: 'absolute',
        right: 3
    },
    azul:{
      backgroundColor: 'blue',
      width: 300, 
      height: 300,
    },
  });


export default Disciplinas;
