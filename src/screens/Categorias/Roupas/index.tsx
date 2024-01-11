import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';


export default function Roupas(){
    return(
        <View style={styles.mainView}>
            <Text>ROUPAS ROUPAS ROUPAS...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',

    },
    text: {
        fontSize: 23,
    },
})