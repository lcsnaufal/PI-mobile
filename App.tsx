import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import Home from './src/screens/Home/index'
import Teste from './src/screens/Teste';

import AnunciarCentral from './src/screens/AnunciarPages/AnunciarCentral';
import AnunciarAutomovel from './src/screens/AnunciarPages/AnunciarAutomovel';
import AnunciarEletronico from './src/screens/AnunciarPages/AnunciarEletronico';
import AnunciarInstrumento from './src/screens/AnunciarPages/AnunciarInstrumento';
import AnunciarMovel from './src/screens/AnunciarPages/AnunciarMovel';
import AnunciarRoupa from './src/screens/AnunciarPages/AnunciarRoupa';

import Eletronicos from './src/screens/Categorias/Eletronicos';
import Roupas from './src/screens/Categorias/Roupas';
import Automoveis from './src/screens/Categorias/Automoveis';
import Moveis from './src/screens/Categorias/Moveis';
import Instrumentos from './src/screens/Categorias/Instrumentos';



type StackNavigatorParamsList = {
  Home: undefined;
  Teste: undefined;
  AnunciarCentral: undefined;
  AnunciarInstrumento: undefined;
  AnunciarRoupa: undefined;
  AnunciarEletronico: undefined;
  AnunciarMovel: undefined;
  AnunciarAutomovel: undefined;
  Automoveis: undefined;
  Moveis: undefined;
  Roupas: undefined;
  Instrumentos: undefined;
  Eletronicos: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='AnunciarCentral' component={AnunciarCentral} options={{
          title: 'Anunciar',
          headerStyle: {
            backgroundColor: 'yellow',
          },
        }}/> 
        <Stack.Screen name='Teste' component={Teste} />
        <Stack.Screen name='AnunciarEletronico' component={AnunciarEletronico} options={{
          title: 'Anunciar',
          headerStyle: {
            backgroundColor: 'yellow',
          },
          animationEnabled: false,
        }}/> 
        <Stack.Screen name='AnunciarRoupa' component={AnunciarRoupa} options={{
          title: 'Anunciar',
          headerStyle: {
            backgroundColor: 'yellow',
            
          },
          animationEnabled: false,
        }}/>
        <Stack.Screen name='AnunciarAutomovel' component={AnunciarAutomovel} options={{
          title: 'Anunciar',
          headerStyle: {
            backgroundColor: 'yellow',
            
          },
          animationEnabled: false,
        }}/>
        <Stack.Screen name='AnunciarMovel' component={AnunciarMovel} options={{
          title: 'Anunciar Móvel',
          headerStyle: {
            backgroundColor: 'yellow',
            
          },
        }}/>
        <Stack.Screen name='AnunciarInstrumento' component={AnunciarInstrumento} options={{
          title: 'Anunciar',
          headerStyle: {
            backgroundColor: 'yellow',
            
          },
          animationEnabled: false,
        }}/>
        <Stack.Screen name='Roupas' component={Roupas} options={{
          headerStyle: {
            backgroundColor: 'yellow',
          }
        }}/>
        <Stack.Screen name='Eletronicos' component={Eletronicos} options={{
          headerStyle: {
            backgroundColor: 'yellow',
          }
        }}/>
        <Stack.Screen name='Automoveis' component={Automoveis} options={{
          headerStyle: {
            backgroundColor: 'yellow',
          }
        }}/>
        <Stack.Screen name='Moveis' component={Moveis} options={{
          headerStyle: {
            backgroundColor: 'yellow',
          }
        }}/>
        <Stack.Screen name='Instrumentos' component={Instrumentos} options={{
          headerStyle: {
            backgroundColor: 'yellow',
          }
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})