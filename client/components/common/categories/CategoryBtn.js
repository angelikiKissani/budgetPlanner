import React from 'react'
import {View,StyleSheet,Text, Pressable, Touchable, TouchableOpacity} from 'react-native'
import { COLORS,SIZES } from '../../../constants'




const CategoryBtn = ({category_name,onPress,goal}) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={goal? styles.goal_container: styles.category_container}
        >
            <Text style={styles.text}>{category_name}</Text>
        
    </TouchableOpacity>
      
  )

}


const styles = StyleSheet.create({
    category_container:{
        margin:4,
        backgroundColor:COLORS.warm,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius:25
    
    },
    goal_container:{
      margin:4,
      backgroundColor:COLORS.primary,
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius:25
  
  },
    text:{
        color:"white",
        fontSize:16,
        fontWeight:"700"
    },
    
});


export default CategoryBtn