import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { FirebaseContext } from '../../FirebaseContext';

import color from '../../assets/color';
import Styles from './Styles'

const index = ({navigation}) => {

    const {auth} = useContext(FirebaseContext)

    const [email, setEmail] = useState("test@dope.com")
    const [password, setPassword] = useState("123456")

    const connexion = () => {

        try {
            auth.signInWithEmailAndPassword(email, password)
            console.log("connexion", email, password)

        } catch (error) {
            console.log(error.message)
        }
        
    }
    
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
                        onChangeText={setEmail}
                        value={email}
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
                        onChangeText={setPassword}
                        value={password}
                        
                    />
                      <Text style={{
                        color:"#FFFFFF",
                        paddingLeft:180,
                        paddingBottom:20
                    }}>Mot de passe oubli?? ?</Text>
                   
                    <Button
                        title="CONNEXION"
                        buttonStyle={Styles.btnConnexion}
                        titleStyle={{color:color.txtcolorBtnWelcome}}
                        onPress={connexion}
                    />

                </View>
                  
            </View>
        </LinearGradient>
        
    
    )
}

export default index

