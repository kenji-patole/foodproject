import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Header, Card, ListItem, Icon } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../assets/color';
import ListMenu from '../ListMenu';
import ListPlat from '../ListPlat';

const index = ({navigation}) => {
    return (
        <View style={Styles.content}>
            
            <View style={Styles.headerContent}>
            <Header
                placement="left"
                rightComponent={{ icon: 'menu', color: color.orange3 }}
                onPressComponent={() => onPress}
                backgroundColor="#E0E0E0"
            />
                <Text style={Styles.txtTitleMenu}>Bonjour Kenji</Text>
                <Text style={Styles.txtSubtitleMenu}>Tu Manges Quoi Aujourd'hui ?</Text>
                <View>
                    <ListMenu/>
                </View>
            </View>
            <View style={Styles.bottomContent}>
                <ListPlat navigation={navigation}/>
            </View>
        </View>

       
    )
}

export default index

const Styles = StyleSheet.create({
    content:{   
        flex:1,
        backgroundColor:color.bgPrivate,
        padding:20
    },

    headerContent:{
        flex:0.4,
        // backgroundColor:"red"
    },

    bottomContent:{
        flex:0.7,
        // backgroundColor:"green",
        // justifyContent:"flex-end"
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
    },

    txtTitleMenu: {
        fontSize:30,
        fontWeight:'bold',
        color:color.txtcolorTitle,
        textAlign:"left"
    },

    txtSubtitleMenu: {
        fontSize:20,
        fontWeight:'bold',
        color:color.txtcolorSubTitle,
        textAlign:"left",
        marginBottom:40
    }


    
})
