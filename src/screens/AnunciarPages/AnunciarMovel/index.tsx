import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import MovelInput from '../../../components/inputs/movelInput/MovelInput';
import SearchBar from '../../../components/searchBar/SearchBar';


export default function AnunciarMovel(){
    return(
        <View>
            <MovelInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
    },
})