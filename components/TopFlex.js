import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "react-native-vector-icons"; 
import NotificationsSVG from "../assets/notifications";
import Voltar from "../assets/Voltar";
import { useNavigation } from "@react-navigation/native";

function TopFlex({ titulo }){
    const navigation=useNavigation();
    return(
        <View style={styles.TopFlex}>
            <Voltar
                style={styles.Voltar}
                width="33.64"
                height="35"
                onPress={() => navigation.goBack()}
            />
                <Text style={styles.OlaNome}>{titulo}</Text>
                <View style={styles.TopRight}>
                    <View style={styles.NotificationsContainer}>
                        <NotificationsSVG />
                    </View>
                    <Ionicons name="person-circle-outline" size={39} color="black" />
                </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Voltar: {
        marginLeft: 0,
    },
    TopFlex: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        marginTop: 30,
    },
    OlaNome: {
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
    },
    NotificationsContainer: {
        borderRadius: 3000,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        height: 33,
    },
    TopRight:{
        position: 'absolute',
        flexDirection: 'row',
        right: 3, 
        top: 0,
        alignItems: 'center',
    }
})

export default TopFlex;