import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Bullets(){

    const { navigate } = useNavigation<NavigationProp<any>>();

    return(


        <View>
            <ScrollView style={styles.scrollView} horizontal={true}
            showsHorizontalScrollIndicator={false} >
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('AnunciarEletronico')}>
                    <Text style={styles.text}>Eletrônicos</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('AnunciarAutomovel')}>
                    <Text style={styles.text}>Automóveis</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('AnunciarRoupa')}>
                    <Text style={styles.text}>Roupas</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('AnunciarMovel')}>
                    <Text style={styles.text}>Móveis</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('AnunciarInstrumento')}>
                    <Text style={styles.text}>Instrumentos Musicais</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    btnStyle: {
        backgroundColor: 'yellow',
        height: 50,
        width: 130,
        padding: 5,
        elevation: 3,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 16,
    },
}) 