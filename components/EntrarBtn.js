import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function EntrarBtn({ page }) {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(page)} // Corrigido para ser uma função
      >
        <LinearGradient
          colors={['#894E9A', '#DA3181']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
