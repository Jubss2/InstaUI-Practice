import {StyleSheet, ScrollView} from 'react-native'

export const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
},
header :{
    paddingHorizontal:10,
    marginTop:40,
    width: "100%",
    height: 56,
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row"
},
headerOpt :{
    alignItems:"center",
    flexDirection: "row",
    gap:10
    },
    storys:{
        height:114,
        paddingLeft:10,
        paddingVertical:10,
        alignContent:"center",
    },
    storiesCard:{
        marginRight:14,
        
    },
    storiesCardImage:{
        width:64,
        height:64,
        borderWidth:2,
        borderColor:"#F7855A",
        borderRadius: 50,
        
    },
    content:{
        width:"100%",
        marginBottom:10,
        marginTop:-20
    },
    contentHeader:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:10,
        height:52,
        
    },
    contentHeaderLeft:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },

    contentHeaderLeftImage:{
        width:30,
        height:30
    },
    contentHeaderLeftText:{
        color: "#FFF",
      

    },
    contentFooter:{
        width:"100%",       
        paddingHorizontal:10,
        marginTop:7,
        marginBottom:30
    },
    contentFooterLeft:{
        alignItems:"center",
        flexDirection:"row",
        gap: 10,
    },
    rodape:{
        paddingTop:10,
        height:45,
        width:'100%',
        marginBottom: 6,
        paddingHorizontal:10,
        alignItems:'center',
        gap:50,
        flexDirection: "row",
    },
});