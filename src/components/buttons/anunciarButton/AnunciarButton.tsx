import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AnunciarButton(){

    const { navigate } = useNavigation<NavigationProp<any>>();

    return(


        <View>
            <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('AnunciarCentral')}>
                <Text style={styles.text}>Anunciar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: 'yellow',
        height: 40,
        width: 73,
        padding: 5,
        elevation: 3,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
}) 