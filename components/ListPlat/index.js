import React from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, Pressable} from 'react-native';
import { Button, Header, Card, ListItem, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../assets/color';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

  const dataMenu = [
    {
        id: '1',
        title: 'Pizza',
      },
      {
        id: '2',
        title: 'Burger',
      },
      {
        id: '3',
        title: 'Dope',
      },
      {
        id: '4',
        title: 'Pizza',
      },
      {
        id: '5',
        title: 'Burger',
      },
      {
        id: '6',
        title: 'Dope',
      },
      


  ]

  const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const add = () => {
  console.log("add")
}

const myButton = (
  <Icon.Button
    name='add-circle'
    size={40}
    onPress={add}
    color={color.orange3}
    backgroundColor="white"
  >
    Ajouter
  </Icon.Button>       
)

const index = ({navigation}) => {
    const renderItem = ({ item }) => (
    
      <Pressable style={{
          width:140,
          height:180,
          margin:10,
          backgroundColor:"yellow",
          borderRadius:10,
      }}

        onPress={() =>navigation.navigate('Detail')}>
      
          <ImageBackground
            style={{
              flex:0.5
            }}
            source={require('../../images/4.png')}
            resizeMode="center"
          />

          <View style={{
            flex:0.5,
            justifyContent:"flex-end"
          }}>
        
            <Text style={styles.txtListPlat}>Big Mac</Text>
            <Text style={styles.txtPriceListPlat}>9.99 €</Text>

            {myButton}

          </View>
      </Pressable>
      
    )
    return (
        <View>
            <FlatList
                numColumns={2}
                data={dataMenu}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    item: {
        height:40,
        width:100,
        backgroundColor:color.orange3,
        marginRight:10 ,
        borderRadius:10,
        padding:5
    },
    
    title: {
      fontSize: 20,
      textAlign:'center',
      fontWeight:'bold',
      color:'#FFFFFF'
    },

    txtSubtitleMenu: {
      fontSize:20,
      fontWeight:'bold',
      color:color.txtcolorSubTitle,
      textAlign:"center",
      marginBottom:40
  },

  txtSubtitleMenu: {
      fontSize:20,
      fontWeight:'bold',
      color:color.txtcolorSubTitle,
      textAlign:"left",
      marginBottom:40
  },

  txtListPlat :{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center'
  },

  txtPriceListPlat :{
    fontSize:17,
    fontWeight:'bold',
    color:color.txtcolorSubTitle,
    textAlign:'center'
  }

});
