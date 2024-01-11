import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import Bullets from '../../../components/bullets/Bullets';


export default function AnunciarCentral(){
    return(
        <View style={styles.MainView}>
            <Bullets/>
        </View>
    )
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 23,
    },
})