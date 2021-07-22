import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    content:{   
        flex:1,
        // backgroundColor:color.bgPublic,
        padding:20
    },

    headerContent:{
        flex:0.6,
        // backgroundColor:"red"
    },

    bottomContent:{
        flex:0.4,
        // backgroundColor:"green",
        justifyContent:"flex-end"
    },

    btnInscription:{
        borderRadius:15,
        height:50,
        backgroundColor:color.orange1,
        fontSize:26,
        fontWeight:"bold"
    },

    btnConnexion:{
        borderRadius:15,
        height:50,
        backgroundColor:color.white,
        fontSize:26,
        fontWeight:"bold",
        marginBottom:20
    },

    txtWelcome: {
        fontSize:50,
        fontWeight:'bold',
        color:"#FFFFFF",
        textAlign:'center',
        marginTop:20
    }


    
})

export default Styles