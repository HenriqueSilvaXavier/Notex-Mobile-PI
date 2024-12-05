import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SelectedDayProvider } from './contexts/SelectedDayContext';
import { AuthProvider } from './contexts/AuthContext';
import { ClassProvider} from './contexts/ClassContext';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import Overview from './screens/OverviewScreen';
import Calendario from './screens/CalendarioScreen';
import Disciplinas from './screens/DisciplinasScreen';
import MinhaTurma from './screens/MinhaTurmaScreen';
import Estudantes from './screens/EstudantesScreen';
import Horario from './screens/HorarioScreen';
import Comunicados from './screens/ComunicadosScreen';
import Conceitos from './screens/ConceitosScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ClassProvider>
      <AuthProvider>
        <SelectedDayProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Overview" 
                component={Overview} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Calendario" 
                component={Calendario} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Disciplinas" 
                component={Disciplinas} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="MinhaTurma" 
                component={MinhaTurma} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Estudantes" 
                component={Estudantes} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Horario" 
                component={Horario} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Comunicados" 
                component={Comunicados} 
                options={{ headerTitle: '', headerShown: false }} 
              />
              <Stack.Screen 
                name="Conceitos" 
                component={Conceitos} 
                options={{ headerTitle: '', headerShown: false }} 
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SelectedDayProvider>
      </AuthProvider>
    </ClassProvider>
  );
}
