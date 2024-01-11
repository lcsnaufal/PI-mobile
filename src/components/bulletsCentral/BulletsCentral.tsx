import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';




export default function BulletsCentral(){

    const { navigate } = useNavigation<NavigationProp<any>>();

    return(


        <View>
            <ScrollView style={styles.scrollView} horizontal={true} 
            showsHorizontalScrollIndicator={false}>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('Eletronicos')}>
                    <MaterialIcons name="smartphone" size={30} color="black" />
                    <Text style={styles.text}>Eletrônicos</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('Automoveis')}>
                    <AntDesign name="car" size={30} color="black" />
                    <Text style={styles.text}>Automóveis</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('Roupas')}>
                    <Ionicons name="shirt-outline" size={30} color="black" />
                    <Text style={styles.text}>Roupas</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('Moveis')}>
                    <MaterialCommunityIcons name="sofa-outline" size={30} color="black" />
                    <Text style={styles.text}>Móveis</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnStyle} onPress={() => navigate('Instrumentos')}>
                    <FontAwesome5 name="guitar" size={30} color="black" />
                    <Text style={styles.text}>Instrumentos</Text>
                    <Text style={{fontSize: 16,}}>Musicais</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 35,
    },
    btnStyle: {
        backgroundColor: 'yellow',
        height: 100,
        width: 130,
        padding: 5,
        elevation: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 10,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
    },
}) 