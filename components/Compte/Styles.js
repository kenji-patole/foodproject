import React from 'react'
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
   
    content:{   
        flex:1,
        backgroundColor:color.bgPrivate,
        padding:20 
    },
    
    headerContent:{
        flex:0.7,
        // backgroundColor:"yellow",
        alignItems:'center',
        justifyContent:'space-around'
    
    },

    bottomContent:{
        flex:0.6,
        // backgroundColor:"blue",
        justifyContent:"flex-end",
        
    },

    btnCommander:{
        borderRadius:15,
        height:50,
        backgroundColor:color.orange3,
        fontSize:26,
        fontWeight:"bold"
    },

    txtAvatar : {
        fontSize:30,
        fontWeight:'bold'
    },

    txtListCommande :{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:color.orange2,
        marginBottom:20
    },

    title: {
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
        color:color.txtcolorTitle
    }


})

export default Styles