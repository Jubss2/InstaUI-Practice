import {StyleSheet, ScrollView} from 'react-native'

export const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
},
conteudo:{
    
    marginTop:-20,
    paddingHorizontal:50
},
image:{
    width: 200,
    height: 75,
    marginBottom:60,
    marginTop: 90

},
input:{
    borderWidth:1,
    marginTop:5,
    padding:10,
    height:45,
    borderRadius:5,
    borderColor:'#DCDCDC',
    width: 300
},
conteudo2:{ 
    marginTop: 5,
    paddingHorizontal:50
},
esqueciSenha:{ 
    marginTop: 5,
    textAlign:'right',
    color: '#1E90FF',
},
but:{
    marginTop:30,
    width:300,
    height:35,
    backgroundColor:'#1E90FF',
    borderRadius:10,
    alignItems:'center',
},
textBut:{
    padding:7,
    color:'white',
    fontSize:15,
    textAlign:'center'
},
linha1:{
    color: '#DCDCDC',
    marginTop: 20,
    
},
linha2:{
    color: '#DCDCDC',
    marginTop:-20,
    fontSize:20,
    textAlign:'center'
},
linha3:{
    color: '#1E90FF',
    marginTop:20,
    fontSize:15,
    textAlign:'center'
},
linhaRodape:{
    color: '#DCDCDC',
    textAlign:'center',
    paddingBottom: 25
},
rodape:{
    paddingTop:125,
    width:'100%',
    marginBottom: 15,
    alignItems:'center'
},
nTemConta:{
    color: '#DCDCDC',
    fontSize:15,
    textAlign:'center'
},
inscreva:{
    color: '#1E90FF',
    fontSize:15,
    textAlign:'center'
},
rodapeText:{
    flexWraph: 'wrap',
    flexDirection:'row', 
    paddingBottom:15
}


});