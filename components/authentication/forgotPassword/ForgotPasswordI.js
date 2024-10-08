import React from "react";
import { View,TextInput,StyleSheet } from "react-native";

import { COLORS ,SIZES} from '../../../constants'

const ForgotPasswordI = ({value,placeholder,onChangeText}) => { 
    return(
        <View style={styles.container}>
            <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray}
            style={styles.input}
            onChangeText={onChangeText}
            autoCorrect={false}
            autoCapitalize="none"
            

            />
        </View>
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

export default ForgotPasswordI