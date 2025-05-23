import {Text, TextInput, Image, Pressable,View} from 'react-native'
import {styles} from "../Login/styles"
import {useNavigation} from '@react-navigation/native'
import insta from "../../../../assets/insta.png"
import{useState} from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Login(){

    const [text, setText] = useState('');

    const navigation = useNavigation();
    
    function goHome(){
        navigation.navigate("Home");
    }

    return(
        
        <View style={styles.container}>
        <StatusBar style="light"> </StatusBar>
        <Image 
        source={insta}
        style={styles.image}
        resizeMode='stretch'
        />
        <View style={styles.conteudo}>
            <TextInput
                style = {styles.input} placeholder = 'Telefone, usuário ou email'
                onChangeText={newText => setText(newText)}
            /></View>
            <View style={styles.conteudo2}>
            <TextInput
                style = {styles.input} placeholder = 'Senha'
                onChangeText={newText => setText(newText)}
                />
                <Text style={styles.esqueciSenha}> Esqueceu a senha?</Text>
                <Pressable onPress={goHome} style = {styles.but}>
                    <Text style={styles.textBut}> {'Avançar'}</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.linha1}> _____________________             _____________________</Text>
                <Text style={styles.linha2}>ou</Text>
                <Text style={styles.linha3}> Entre com o Facebook</Text>
            </View>
            <View style={styles.rodape}>
            <Text style={styles.linhaRodape}>_____________________________________________________</Text>
             <View style={styles.rodapeText}>

                <Text style = {styles.nTemConta}> Não tem uma conta? </Text>
                <Text style = {styles.inscreva}>Inscreva-se</Text>
             </View>
            </View>
            
      </View>

    );

}