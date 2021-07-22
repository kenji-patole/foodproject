import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import styles from './styles'

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

  ]

  const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const index = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    )
    return (
        <View>
            <FlatList
                // numColumns={4}
                data={dataMenu}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    )
}

export default index

