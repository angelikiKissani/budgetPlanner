import React from 'react'
import {View, Image,StyleSheet, TouchableOpacity} from 'react-native'


import { icons } from "../../constants";

const FooterItem = ({name , handlePress , screenName,routeName}) =>{
    dimension="32%"
    if (name=="home"){iconName=icons.home}
    else if (name=="expenses"){iconName=icons.expenses}
    else if (name=="savings"){iconName=icons.savings}
    else if (name=="account"){iconName=icons.account}
    // let iconName=focused ? icons.accountp : icons.account;
                    
    return (
        // <View>
        //     <TabBtn iconUrl={iconName} "/> 
        // </View>)
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image  
                source={iconName} 
                style={styles.image(dimension)}
            />
        </TouchableOpacity>
        )
    
}
const styles = StyleSheet.create({
    container:{
      
      width: 110,
      height: 110,
      marginVertical:20,
      alignItems: "center",
      
    },
    
    image: (dimension) => ({
      width: dimension,
      height: dimension
    })
  });
export default FooterItem