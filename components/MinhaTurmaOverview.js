import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Nunito_500Medium, Nunito_300Light } from '@expo-google-fonts/nunito'
import { MaterialIcons } from "@expo/vector-icons";
import DocumentLockSVG from '../assets/DocumentLock';
import DoisPontosSVG from '../assets/DoisPontosSVG';

export default function MinhaTurmaOverview({turma, ano, id}) {
  const navigation=useNavigation();
  const [fontLoaded]=useFonts({
    Poppins_400Regular,
    Nunito_500Medium,
    Nunito_300Light,
  });
  
  if(!fontLoaded){
    return null;
  };
  return (
    <View style={styles.MinhaTurmaContainer}>
        <Text style={styles.MinhaTurmaTitulo}>Minha Turma</Text>
        <Text style={styles.MinhaTurmaDescricao}>Veja as informações da sua turma</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('MinhaTurma')}>
          <ImageBackground
            source={require('../assets/MinhaTurmaFundo.png')} // URL ou require da imagem
            style={styles.card}
            imageStyle={styles.ImageBackground}
          >
            <View style={styles.header}>
              <Text style={styles.title}>{turma}</Text>
              <TouchableOpacity>
                <DoisPontosSVG/>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Ano: {ano}</Text>
            <View style={styles.footer}>
              <DocumentLockSVG/>
              <Text style={styles.footerText}>ID: {id}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MinhaTurmaContainer:{
    width: 270,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  MinhaTurmaTitulo:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
  },
  MinhaTurmaDescricao:{
    fontFamily: 'Nunito_500Medium',
    color: 'rgba(188, 193, 205, 1)'
  }, 
  card: {
    marginTop: 15,
    backgroundColor: "#E91E63",
    borderRadius: 12,
    padding: 16,
    width: 270,
    height: 120,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  ImageBackground:{
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
    fontFamily: 'Nunito_400Regular'
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    marginLeft: 8,
    fontFamily: 'Nunito_300Light',
  },
});
