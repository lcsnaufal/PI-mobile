import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Btn from '../buttons/anunciarButton/AnunciarButton';

export default function Header(){
    return(
        <SafeAreaView style={styles.headerView}>
            <StatusBar style='auto'/>
            <View style={styles.headerTopElements}>
                <Text>Mercado Usados</Text>
                <Btn/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'yellow',
        paddingTop: 25,
    },
    headerTopElements: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
})