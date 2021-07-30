import React from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, Pressable} from 'react-native';
import { Button, Header, Card, ListItem, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../assets/color';

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
    animated={true}
  >
   <View>
      <Text style={{fontWeight:'bold'}}>Big Mac</Text>
      <Text style={{fontWeight:'bold', 
                  color:color.orange1,
                  fontSize:20
                  }}>9.99 €</Text>
   </View>

  </Icon.Button>       
)

const index = ({navigation}) => {

    const renderItem = ({ item }) => (
    
      <Pressable style={Styles.pressable}

        onPress={() =>navigation.navigate('Detail')}>
      
          <ImageBackground
            style={{
              flex:0.6,
              marginTop:20
            }}
            source={require('../../images/4.png')}
            resizeMode="center"
          />

          <View style={{
            flex:0.5,
            justifyContent:"flex-end"
          }}>
        
            {/* <Text style={styles.txtListPlat}>Big Mac</Text>
            <Text style={styles.txtPriceListPlat}>9.99 €</Text> */}

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


const Styles = StyleSheet.create({

  pressable:{   
      width:140,
      height:180,
      margin:10,
      backgroundColor:"yellow",
      borderRadius:10, 
  },
  
})