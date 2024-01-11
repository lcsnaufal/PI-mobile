import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import Header from '../../../components/header/Header';
import Bullets from '../../../components/bullets/Bullets';


export default function AnunciarEletronico(){
    return(
        <View>
            <Bullets/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
    },
})