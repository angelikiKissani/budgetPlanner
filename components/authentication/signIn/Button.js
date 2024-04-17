import { Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { COLORS ,SIZES} from '../../../constants'

const Button = ({text,onPress,cont_style,text_style}) => {
    


  return (
    <Pressable 
        onPress={onPress} 
        style={styles[cont_style]} >
      <Text style={[styles[text_style]]}>{text}</Text>
      
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
    },
    container_1:{
        marginTop:10,
        width:"25%",
        borderRadius:25,
        paddingVertical:15, 
        backgroundColor:COLORS.secondary,
        
        alignItems:"center"

    },
    container_2:{   
        
      paddingVertical:"60%"
    },
    container_3:{   
        paddingBottom:7,
        alignSelf:"baseline",
        paddingHorizontal:23
    },
    


    text_1:{
        fontSize:17,
        fontWeight:"bold",
        color:"white"
    },
    text_2:{
        fontSize:SIZES.small,
        fontWeight:"bold",
        color:COLORS.secondary

    },
    text_3:{
        fontSize:SIZES.medium,
        fontWeight:"bold",
        color:COLORS.warm

    },
    text_4:{
        fontSize:SIZES.small,
        fontWeight:"bold",
        color:COLORS.tertiary

    }
})
export default Button