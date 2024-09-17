import { Text,StyleSheet,Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS ,SIZES} from '../../../constants'

const SignUpButton = ({text,onPress,cont_style,text_style}) => {
    


  return (
    <Pressable 
        onPress={onPress} 
        style={[styles.container , styles[cont_style]]} >
      <Text style={[styles[text_style]]}>{text}</Text>
      
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        
        paddingHorizontal:20,
        alignItems:"center"
    },
    container_1:{
        marginTop:10,
        width:"100%",
        paddingHorizontal:10,
        borderRadius:5,
        paddingVertical:15, 
        backgroundColor:COLORS.primary,

    },
    container_2:{   
        marginTop:10,
        marginBottom:15
        
    },
    container_3:{
        
        paddingHorizontal:10,
        width:"100%",
        margin:6,
        borderRadius:5,
        paddingVertical:10

    },
    


    text_1:{
        fontSize:SIZES.medium,
        fontWeight:"bold",
        color:COLORS.lightWhite
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
export default SignUpButton