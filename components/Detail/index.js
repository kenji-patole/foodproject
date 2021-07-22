import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CardEcomOne } from 'react-native-card-ui';

import color from '../../assets/color';



const index = () => {
    return (
        <View style={Styles.content}>
           <View style={Styles.headerContent}>
              <View>
                <CardEcomOne
                    title={"NIKE SILVER"}
                    price={"$200"}
                    image={require("../../images/5.png")} //OR {{uri:"http://......"}}
                    icon={"star"}
                    nbStar={3}
                    iconColor={"#FFC57C"}
                    colorList={["#000000", "#0b8457", "#7ed3b2"]}
                    selectColor={"#000000"}
                    getSelectColor={color => alert(color)}
                />
                </View>
            </View>

            <View style={Styles.bottomContent}>
                 <Text>Detail</Text>
             </View>
           
        </View>
        
    )
}

export default index

const Styles = StyleSheet.create({
    content:{   
        flex:1,
        backgroundColor:"green",
        padding:20,
        
    },
    headerContent:{
        flex:0.7,
        backgroundColor:"yellow",
        // alignItems:'center'
    },

    bottomContent:{
        flex:0.3,
        backgroundColor:"blue",
        justifyContent:"flex-end"
    }
})