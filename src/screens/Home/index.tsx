import { StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Header from '../../components/header/Header';
import BulletsCentral from '../../components/bulletsCentral/BulletsCentral';
import SearchBar from '../../components/searchBar/SearchBar';
import MovelInput from '../../components/inputs/movelInput/MovelInput';


export default function Home() {
    const { navigate } = useNavigation<NavigationProp<any>>();


    return (
        <ScrollView style = {styles.mainScrollView}>
          <View style = {styles.mainView}>
            <Header/>
            <BulletsCentral/>
          </View>
        </ScrollView>
    );
  }
  

  const styles = StyleSheet.create({
    mainScrollView: {
      backgroundColor: 'white',
    },
    mainView: {
      backgroundColor: 'white',
    },
    text: {
      backgroundColor: "black",
      color: "white",
    },
    btnText: {
        backgroundColor: 'red',
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        elevation: 5,

    },
  });


              
            {/* <Text style={styles.text}>teste !</Text> */}
            {/* <InputData/>
            <Btn/>
            <Text>Teste</Text>
            <TouchableOpacity style={styles.btnText} onPress= {() => navigate('Teste')}>
              <Text>Ir para a tela teste</Text>
            </TouchableOpacity>
            <Card data = {pokemons}/> */}
            {/* <Image source={ImageFundo}/> */}