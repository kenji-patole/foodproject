import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { CardEcomOne } from 'react-native-card-ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import color from '../../assets/color';



const index = ({navigation}) => {
    return (
        
        <View style={Styles.content}>
            <Header
                placement="left"
                rightComponent={<Ionicons name="menu" color={color.orange3} size={25} onPress={()=> navigation.navigate('Compte')}/>}
                leftComponent={<Icon name="chevron-left" color={color.orange3} size={17} onPress={()=> navigation.goBack()}/>}
                backgroundColor="#E0E0E0"

            />
            
            <View style={Styles.headerContent}>
                <CardEcomOne
                    title={"Big Mac"}
                    price={"9.99€"}
                    image={require("../../images/4.png")} //OR {{uri:"http://......"}}
                    icon={"star"}
                    nbStar={5}
                    // iconColor={"#FFC57C"}
                    // colorList={["#000000", "#0b8457", "#7ed3b2"]}
                    selectColor={"#000000"}
                    getSelectColor={color => alert(color)}
                />
            </View>
            <View style={Styles.bottomContent}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    {"\n"}
                </Text>
                
                <Button
                    icon={
                        <Icon
                        name="shopping-cart"
                        size={20}
                        color="white"
                        />
                    }
                    title="Commander"
                    buttonStyle={Styles.btnCommander}
                />
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