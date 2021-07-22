import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Header, Card, ListItem, Icon } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import color from '../../assets/color';
import ListMenu from '../ListMenu';
import ListPlat from '../ListPlat';

import Styles from './Styles'

const index = ({navigation}) => {
    return (
        <View style={Styles.content}>
            
            <View style={Styles.headerContent}>
                <Header
                    placement="left"
                    rightComponent={<Ionicons name="menu" color={color.orange3} size={25}/>}
                    backgroundColor="#E0E0E0"
                />
                <Text style={Styles.txtTitleMenu}>Bonjour Kenji</Text>
                <Text style={Styles.txtSubtitleMenu}>Tu Manges Quoi Aujourd'hui ?</Text>
                <View>
                    <ListMenu navigation={navigation}/>
                </View>
            </View>
            <View style={Styles.bottomContent}>
                <ListPlat navigation={navigation}/>
            </View>
        </View>

       
    )
}

export default index

