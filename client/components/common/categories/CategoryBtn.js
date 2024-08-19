import React from 'react'
import {View,StyleSheet,Text, Pressable} from 'react-native'
import { COLORS,SIZES } from '../../../constants'




const CategoryBtn = ({category_name,selected}) => {
    console.log(category_name)
  return (
    <Pressable 
        onPress={()=>{ selected=true}}
        style={({pressed})=>[{ borderColor: pressed ? COLORS.tertiary : COLORS.white},styles.category_container]}
        >
        {/* <View style={styles.category_container}> */}
            <Text style={styles.text}>{category_name}</Text>
        {/* </View> */}
    </Pressable>
      
  )

}


const styles = StyleSheet.create({
    category_container:{
        borderWidth:2,
        margin:4,
        marginHorizontal:10,
        backgroundColor:COLORS.warm,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius:25
    
    },
        text:{
            color:"white",
            fontSize:15,
            fontWeight:"700"
        },
    
});


export default CategoryBtn