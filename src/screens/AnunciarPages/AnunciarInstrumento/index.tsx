import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import Bullets from '../../../components/bullets/Bullets';


export default function AnunciarInstrumento(){
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