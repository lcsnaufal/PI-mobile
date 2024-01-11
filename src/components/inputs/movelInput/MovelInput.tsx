import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";



    var [imagemValue, setImagemValue] = useState('');
    var [movelValue, setMovelValue] = useState('');
    var [tamanhoValue, setTamanhoValue] = useState('');
    var [corValue, setCorValue] = useState('');
    var [numeroValue, setNumeroValue] = useState('');
    var [precoValue, setPrecoValue] = useState('');


async function MovelDataPost(this.imagemValue: string){

    var movelImagemInput = imagemValue;
    var movelNomeInput = movelValue;
    var movelTamanhoInput = tamanhoValue;
    var movelCorInput = corValue;
    var movelNumeroInput = numeroValue;
    var movelPrecoInput = precoValue;
    var movelUrl = "http://localhost:8080/api/moveis";


    var movelDataJson = {

        "imagem": movelImagemInput,
        "movel": movelNomeInput,
        "tamanho": movelTamanhoInput,
        "cor": movelCorInput,
        "numero": movelNumeroInput,
        "preco": movelPrecoInput
    }


    await axios.post(movelUrl, movelDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}

export default function MovelInput(){


    


    return(
        <View style={styles.inputContainer}>
            <View>
                <Text style={styles.Text}>Imagem</Text>
                <TextInput
                style={styles.TextInput}
                value={imagemValue} 
                onChangeText={text => setImagemValue(text)}/>
            </View>
            <View>
                <Text style={styles.Text}>Móvel</Text>
                <TextInput
                style={styles.TextInput}
                value={movelValue} 
                onChangeText={text => setMovelValue(text)}/>
            </View>
            <View>
                <Text style={styles.Text}>Tamanho</Text>
                <TextInput
                style={styles.TextInput}
                value={tamanhoValue} 
                onChangeText={text => setTamanhoValue(text)}/>
            </View>
            <View>
                <Text style={styles.Text}>Cor</Text>
                <TextInput
                style={styles.TextInput}
                value={corValue} 
                onChangeText={text => setCorValue(text)}/>
            </View>
            <View>
                <Text style={styles.Text}>Número</Text>
                <TextInput
                style={styles.TextInput}
                value={numeroValue} 
                onChangeText={text => setNumeroValue(text)}/>
            </View>
            <View>
                <Text style={styles.Text}>Preço</Text>
                <TextInput
                style={styles.TextInput}
                value={precoValue} 
                onChangeText={text => setPrecoValue(text)}/>
            </View>
            <View style={styles.BtnView}>
                <TouchableOpacity style={styles.Btn} onPress={this.MovelDataPost(imagemValue)}>
                    <Text style={styles.BtnText}>Anunciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


    }

    const styles = StyleSheet.create({
        inputContainer: {
            backgroundColor: 'white',
       },
       Text: {
            marginTop: 20,
            marginBottom: 7,
            fontSize: 20,
            marginHorizontal: 10
       },
       TextInput: {
            height: 40,
            backgroundColor: '#dcdcdc',
            borderColor: '#dcdcdc',
            borderRadius: 10,
            paddingHorizontal: 5,
            marginHorizontal: 10,
            fontSize: 15,
       },
       BtnView: {
            marginTop: 41,
            alignItems: 'center',
            paddingBottom: 82,
       },
       Btn: {
            backgroundColor: 'yellow',
            height: 60,
            width: 120,
            padding: 5,
            elevation: 3,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        BtnText: {
            fontSize: 17,
        },

    })