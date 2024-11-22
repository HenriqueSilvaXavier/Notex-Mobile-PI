import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OverviewSelectedSVG from "../assets/overviewSelected";
import OverviewUnselectedSVG from "../assets/overviewUnselected";
import CalendarUnselectedSVG from "../assets/calendarUnselected";
import CalendarSelectedSVG from "../assets/calendarSelected";
import CommentSVG from "../assets/comment";
import ContaSVG from "../assets/conta";

export default function MenuInferior({overviewProp, calendarProp}) {
    const navigation = useNavigation(); // Hook para navegação
    const [overview, setOverview] = useState(overviewProp);
    const [calendar, setCalendar] = useState(calendarProp);

    const handleCalendarPress = () => {
        navigation.navigate("Calendario"); 
    };

    const handleOverviewPress = () => {
        navigation.navigate("Overview"); 
    };

    return (
        <View style={styles.MenuInferiorContainer}>
            <TouchableOpacity onPress={handleOverviewPress}>
                {overview ? (
                    <View style={styles.overviewOpcaoContainer}>
                        <OverviewSelectedSVG />
                        <View style={styles.selecionado} />
                    </View>
                ) : (
                    <OverviewUnselectedSVG />
                )}
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCalendarPress}>
                {calendar ? (
                    <View style={styles.calendarOpcaoContainer}>
                        <CalendarSelectedSVG />
                        <View style={styles.selecionado} />
                    </View>
                ) : (
                    <CalendarUnselectedSVG />
                )}
            </TouchableOpacity>

            <CommentSVG />
            <ContaSVG />
        </View>
    );
}

const styles = StyleSheet.create({
    MenuInferiorContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    selecionado: {
        backgroundColor: "#8F98FF",
        width: 5,
        height: 5,
        borderRadius: 300,
    },
    overviewOpcaoContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
    },
    calendarOpcaoContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
    },
});
