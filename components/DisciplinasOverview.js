import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Nunito_500Medium, Nunito_300Light, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { MaterialIcons } from "@expo/vector-icons";
import SquareRootOfX from '../assets/squareRoot';
import GlobeSVG from '../assets/globe';
import { useNavigation } from '@react-navigation/native';
import DoisPontosSVG from '../assets/DoisPontosSVG';

export default function DisciplinasOverview() {
  const navigation=useNavigation();
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Nunito_500Medium,
    Nunito_300Light,
    Nunito_700Bold,
  });
  
  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.DisciplinasContainer}>
      <Text style={styles.DisciplinasTitulo}>Disciplinas</Text>
      <View style={styles.descricaoFlex}>
        <Text style={styles.DisciplinasDescricao}>Suas disciplinas</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Disciplinas')} style={styles.verTudoContainer}>
          <Text style={styles.verTudo}>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DisciplinasFlex}>
        <ImageBackground
          source={require('../assets/DisciplinaMatematicaFundo.png')}
          style={styles.card}
          imageStyle={styles.ImageBackground}
        >
          <View style={styles.header}>
            <SquareRootOfX style={styles.squareRoot} />
            <TouchableOpacity style={styles.doisPontos}>
              <DoisPontosSVG/>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardText}>Matemática</Text>
        </ImageBackground>

        <ImageBackground
          source={require('../assets/DisciplinaGeografiaFundo.png')}
          style={[styles.card, styles.cardMargin]}
          imageStyle={styles.ImageBackground}
        >
          <View style={styles.header}>
            <GlobeSVG/>
            <TouchableOpacity style={styles.doisPontos}>
              <DoisPontosSVG/>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardText}>Geografia</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  DisciplinasContainer: {
    width: '89%',
    paddingHorizontal: 20,
  },
  DisciplinasTitulo: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
  },
  DisciplinasDescricao: {
    fontFamily: 'Nunito_500Medium',
    color: 'rgba(188, 193, 205, 1)',
  },
  card: {
    flex: 1,
    marginRight: 10, // espaçamento entre os cards
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    height: 120,
  },
  cardMargin: {
    marginLeft: 0, // Retirado o marginLeft negativo, o flex agora cuida do layout
  },
  DisciplinasFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  squareRoot: {
    marginRight: 0,
  },
  tresPontos: {
    marginLeft: 65, // Faz o ícone de "mais opções" se mover para a direita
  },
  cardText: {
    color: '#fff', // Garantir que o texto seja visível no fundo da imagem
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  ImageBackground:{
    borderRadius: 5,
  },
  descricaoFlex:{
    flexDirection: 'row',
    marginBottom: 7,
  },
  verTudo:{
    marginLeft: 120,
  }, 
  verTudoContainer:{
    backgroundColor: 'transparent',
    border: 'none',
  },
  doisPontos:{
    marginLeft: 60
  }
});
