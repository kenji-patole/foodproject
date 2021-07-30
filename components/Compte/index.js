import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, Avatar, Header, ListItem, Icon } from 'react-native-elements';
import { CardEcomOne } from 'react-native-card-ui';
import Iconfont from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../assets/color';
import Styles from './Styles'

import { FirebaseContext } from '../../FirebaseContext';

const dataUser = [
    {
        id: '1',
        title: 'Comande n°1',
        price: 25
    },

    {
        id: '2',
        title: 'Comande n°2',
        price: 30
    },

    {
        id: '3',
        title: 'Comande n°3',
        price: 40,
    },

    {
        id: '4',
        title: 'Comande n°4',
        price: 45,
    },

]

const Item = ({ title }) => (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
    </View>
);

const index = ({navigation}) => {

    const {auth} = useContext(FirebaseContext)

    const logOut = () => {
        auth.signOut()
    }
    
    const renderItem = ({ item }) => (
        <Text style={Styles.title}>{item.title}</Text>
    );
    
       return(
        <View style={Styles.content}>
            <Header
                placement="left"
                rightComponent={<Ionicons name="menu" color={color.orange3} size={25} onPress={()=> navigation.navigate('Compte')}/>}
                leftComponent={<Iconfont name="chevron-left" color={color.orange3} size={17} onPress={()=> navigation.goBack()}/>}
                backgroundColor="#E0E0E0"

            />
            <View style={Styles.headerContent}>
                <Avatar
                    rounded
                    source={require('../../images/deadpool.jpg')}
                    size={200}
                    title="Dead Pool"
                />
                <View>
                    <Text style={Styles.txtAvatar}>Dead Pool</Text>
                </View>
            </View>
            <View style={Styles.bottomContent}>
                <Text style={Styles.txtListCommande}>COMMANDES</Text>
                <FlatList
                    data={dataUser}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                
                <Button
                    icon={
                        <Icon
                        name="coronavirus"
                        size={20}
                        color="white"
                        style={{
                            marginRight:20
                        }}
                        />
                    }
                    title="Déconnexion"
                    titleStyle={{
                        fontSize:20
                    }}
                    buttonStyle={Styles.btnCommander}
                    onPress={logOut}
                />
            </View>
        </View>
    )
    
}

export default index

