import React, { useState, useContext } from 'react'; 
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "react-native-vector-icons"; 
import NotificationsSVG from "../assets/notifications";
import Voltar from "../assets/Voltar";
import { useFonts, Nunito_500Medium } from "@expo-google-fonts/nunito";
import { Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import SearchContainer from "../components/SearchContainer";
import moment from 'moment';
import MenuInferior from '../components/MenuInferior';
import MarkPoint from '../assets/markpoint';
import MarkPointCinza from '../assets/MarkPointCinza';
import LuizHenriqueLimaSVG from '../assets/LuizHenriqueLimaSVG';
import JulieWatsonSVG from '../assets/JulieWatsonSVG';
import JennyAlexanderSVG from '../assets/JennyAlexanderSVG';
import TopFlex from '../components/TopFlex';
import DiasDaSemana from '../components/DiasDaSemana';
import { SelectedDayContext } from '../contexts/SelectedDayContext';
import SortAmountDownSVG from '../assets/SortAmountDownSVG';
import SortAmountUpSVG from '../assets/SortAmountUpSVG';

export default function Calendario() {
    const { selectedDay } = useContext(SelectedDayContext);
    const [ordem, setOrdem] = useState(true);
    const [events, setEvents] = useState({
        '2024-11-18': [
            {
                subject: 'Matemática',
                chapter: 'Chapter 1: Funções',
                location: 'Sala 205',
                teacher: 'Luiz Henrique Lima',
                startTime: '08:00',
                endTime: '09:30',
                photo: LuizHenriqueLimaSVG,
            },
            {
                subject: 'História',
                chapter: 'Capítulo 5: Revolução Francesa',
                location: 'Sala 102',
                teacher: 'Maria Antônia',
                startTime: '10:00',
                endTime: '11:30',
            },
        ],
        '2024-11-19': [
            {
                subject: 'Matemática',
                chapter: 'Chapter 1: Funções',
                location: 'Sala 205',
                teacher: 'Luiz Henrique Lima',
                startTime: '11:35',
                endTime: '13:05',
                photo: LuizHenriqueLimaSVG,
            },
            {
                subject: 'Biologia',
                chapter: 'Capítulo 3: Embriologia',
                location: 'Láb 10',
                teacher: 'Julie Watson',
                startTime: '13:15',
                endTime: '14:45',
                photo: JulieWatsonSVG,
            },
            {
                subject: 'Geografia',
                chapter: 'Capítulo 2: Geopolítica',
                location: 'Sala 403',
                teacher: 'Jenny Alexander',
                startTime: '15:10',
                endTime: '14:40',
                photo: JennyAlexanderSVG,
            },
        ],
    });

    const renderEvents = () => {
        if (!selectedDay) return null;
        const dayEvents = events[selectedDay.format('YYYY-MM-DD')] || [];
        const sortedEvents = [...dayEvents].sort((a, b) => {
            const aTime = moment(a.startTime, 'HH:mm');
            const bTime = moment(b.startTime, 'HH:mm');
            return ordem ? aTime.isBefore(bTime) : bTime.isBefore(aTime);
        });

        return (
            <View style={{ flex: 1 }}>
                {sortedEvents.length > 0 ? (
                    <FlatList
                        data={ordem ? sortedEvents : sortedEvents.slice().reverse()}
                        renderItem={({ item, index }) => (
                            <View style={styles.card}>
                                <View style={styles.timeContainer}>
                                    <Text style={styles.timeText}>{item.startTime}</Text>
                                    <Text style={styles.endtime}>{item.endTime}</Text>
                                </View>
                                <View style={[styles.eventDetails, { backgroundColor: index === 0 ? 'rgba(81, 98, 172, 1)' : '#E5E5E5' }]} >
                                    <Text style={[styles.subject, { color: index === 0 ? 'white' : 'black' }]}>{item.subject}</Text>
                                    <Text style={[styles.chapter, { color: index === 0 ? 'white' : 'black' }]}>{item.chapter}</Text>
                                    <View style={styles.locationContainer}>
                                        {index === 0 ? <MarkPoint /> : <MarkPointCinza />}
                                        <Text style={[styles.detail, { marginLeft: 3 }, { color: index === 0 ? 'white' : 'black' }]}>{item.location}</Text>
                                    </View>
                                    <View style={styles.teacherContainer}>
                                        {item.photo ? React.createElement(item.photo) : <Text style={[styles.detail, { color: index === 0 ? 'white' : 'black' }]}>👩‍🏫</Text>}
                                        <Text style={[styles.detail, { marginLeft: 3 }, { color: index === 0 ? 'white' : 'black' }]}>{item.teacher}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                ) : (
                    <Text style={styles.noEvents}>Nenhum evento para este dia</Text>
                )}
            </View>
        );
    };

    const [fontLoaded] = useFonts({
        Nunito_500Medium,
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    const navigation = useNavigation();

    if (!fontLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.CalendarioContainer}>
            <TopFlex titulo='Calendário e Agenda' />
            <SearchContainer />
            <View style={styles.container}>
                <DiasDaSemana mostrarDias={true} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.horarioLabel}>Horário</Text>
                    <Text style={styles.disciplinasLabel}>Disciplinas</Text>
                    <TouchableOpacity style={styles.ordemBtnCalendario} onPress={() => setOrdem(prevOrdem => !prevOrdem)}>
                        {ordem ? <SortAmountDownSVG style={styles.icon} /> : <SortAmountUpSVG style={styles.icon} />}
                    </TouchableOpacity>
                </View>
                {renderEvents()}
            </View>
            <MenuInferior overviewProp={false} calendarProp={true} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    CalendarioContainer: {
        flex: 1,
    },
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
    },
    eventsContainer: {
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
    },
    timeContainer: {
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    endtime: {
        fontSize: 12,
        color: '#888',
    },
    eventDetails: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        fontFamily: 'Poppins_500Medium',
    },
    subject: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
    chapter: {
        fontSize: 14,
        color: '#555',
        fontFamily: 'Poppins_500Medium',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    teacherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    detail: {
        fontSize: 14,
        color: '#555',
    },
    noEvents: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    disciplinasLabel: {
        fontFamily: 'Nunito_500Medium',
        color: '#BCC1CD',
    },
    horarioLabel: {
        fontFamily: 'Nunito_500Medium',
        color: '#BCC1CD',
        marginRight: 11,
    },
    ordemBtnCalendario:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 158
    },
});
