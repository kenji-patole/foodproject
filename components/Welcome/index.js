import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../assets/color';
import Styles from './Styles'


const index = ({navigation}) => {
    return (
        
        <LinearGradient 
            colors={['#263D8B','#000000']}
            start={{x: 0.8, y: 0.25}} end={{x: 0.5, y: 1.3}}
            style={{flex:1}}
        >
            <ImageBackground source={require('../../images/food.jpg')}
                style={{
                    flex:0.8
                }}
                imageStyle={{
                    borderBottomLeftRadius:180,
                    borderBottomRightRadius:180
                }}
            />
            <View style={Styles.content}>
                <View style={Styles.headerContent}>
                    <Text style={Styles.txtWelcome}>WELCOME TO FOOD APP</Text>
                </View>
                <View style={Styles.bottomContent}>
                    <Button
                        title="CONNEXION"
                        buttonStyle={Styles.btnConnexion}
                        titleStyle={{color:color.txtcolorBtnWelcome}}
                        onPress={()=> 
                            navigation.navigate('Login')
                        }
                    />
                    <Button
                        title="INSCRIPTION"
                        buttonStyle={Styles.btnInscription}
                    />
                </View>
            </View>
        </LinearGradient>

        
    )
}

export default index

