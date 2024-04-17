import { Text,View,StyleSheet,TextInput} from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

import { COLORS ,SIZES} from '../../../constants'



const SignUpInput = ({control, name, rules={},  placeholder, secureTextEntry}) => {
  return (
    <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field:{value,onChange,onBlur},fieldState:{error}})=>
          <>
            <View style={[styles.container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
              <TextInput 
                value={value} 
                onChangeText={onChange} 
                onBlur={onBlur} 
                placeholder={placeholder} 
                placeholderTextColor={COLORS.gray2} 
                style={styles.input} 
                secureTextEntry={secureTextEntry}/>
            </View>
            {error&&( <Text style={{color:COLORS.warm}}>{error.message}</Text>
            )}
        </>
        }
        />
  )
}



const styles= StyleSheet.create({
    container:{
        backgroundColor: "white",
        borderWidth:1,
        borderColor: COLORS.gray,
        borderRadius:5,
        width:"100%",
        shadowColor:COLORS.gray,

        paddingHorizontal:10,
        marginVertical:4


    },
    input:{
        padding:13,
        color:COLORS.tertiary,
        fontSize:SIZES.xLarge

    }
})
export default SignUpInput