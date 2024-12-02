import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import {useContext} from 'react';
import NotificationsSVG from "../assets/notifications";
import Voltar from "../assets/Voltar";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";

function TopFlex({ titulo }){
    const { authData } = useContext(AuthContext);
    const { foto } = authData;
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
                    <Image
                        source={{uri: foto}}
                        style={styles.avatar}
                    />
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
        right: 5, 
        top: 0,
        alignItems: 'center',
        gap: 2,
    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 3000,
    }
})

export default TopFlex;