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
        // alignItems:'center'
    
    },

    bottomContent:{
        flex:0.6,
        // backgroundColor:"blue",
        justifyContent:"flex-end"
    },

    btnCommander:{
        borderRadius:15,
        height:50,
        backgroundColor:color.orange3,
        fontSize:26,
        fontWeight:"bold"
    }
})

export default Styles