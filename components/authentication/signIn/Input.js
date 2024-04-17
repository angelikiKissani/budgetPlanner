import { Text,View,StyleSheet,TextInput} from 'react-native'
import React from 'react'
import { COLORS ,SIZES} from '../../../constants'
import { Controller } from 'react-hook-form'

const Input = ({control, name, rules={},  placeholder, secureTextEntry}) => {
  return (

      <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field:{value,onChange,onBlur},fieldState:{error}})=>
          <>
            <View style={[styles.container,{borderColor: error ? COLORS.warm : COLORS.secondary}]}>
              <TextInput 
                value={value} 
                onChangeText={onChange} 
                onBlur={onBlur} 
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray2} 
                style={styles.input} 
                secureTextEntry={secureTextEntry}/>
            </View>
            {error&&(
              <Text style={{color:COLORS.warm}}>{error.message}</Text>
            )}
        </>
        }
      /> 
    



  )
}



const styles= StyleSheet.create({
    container:{
        backgroundColor: "white",
        borderWidth:3,
        borderRadius:25,
        width:"100%",
        justifyContent:"center",
        height:65,

        paddingHorizontal:10,
        marginVertical:10


    },
    input:{
        paddingLeft:10,
        color:COLORS.primary,
        fontSize:SIZES.xLarge,
        fontWeight:"500"

    }
})
export default Input