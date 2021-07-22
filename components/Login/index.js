import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import color from '../../assets/color';

const index = ({navigation}) => {
    return (
        
        <LinearGradient 
            colors={['#263D8B','#000000']}
            start={{x: 0.8, y: 0.25}} end={{x: 0.5, y: 1.3}}
            style={{flex:1}}
        >
           
            <View style={Styles.content}>
                
                <View style={Styles.headerContent}>     
                    <Icon
                        name="user-circle-o"
                        size={100}
                        color="#A9ACB5"
                    />
            
                    <Text style={Styles.txtLogin}>CONNECTEZ VOUS</Text>
                </View>

                <View style={Styles.bottomContent}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='white'
                            />  
                        }
                    
                    />
                    <Input
                        placeholder='Mot de passe'
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='white'
                            />
                        }
                        
                    />
                      <Text style={{
                        color:"#FFFFFF",
                        paddingLeft:180,
                        paddingBottom:20
                    }}>Mot de passe oublié ?</Text>
                   
                    <Button
                        title="CONNEXION"
                        buttonStyle={Styles.btnConnexion}
                        titleStyle={{color:color.txtcolorBtnWelcome}}
                        onPress={()=> 
                            navigation.navigate('Menu')
                        }
                    />

                </View>
                  
            </View>
        </LinearGradient>
        
    
    )
}

export default index

const Styles = StyleSheet.create({
    content:{   
        flex:1,
        // backgroundColor:color.bgPublic,
        padding:20
    },

    headerContent:{
        flex:0.4,
        // backgroundColor:"red",
        alignItems:'center'
    },

    bottomContent:{
        flex:0.6,
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

    txtLogin: {
        fontSize:30,
        fontWeight:'bold',
        color:"#FFFFFF",
        textAlign:'center',
        padding:20
    },

    
    
})