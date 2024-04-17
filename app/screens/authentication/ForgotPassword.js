import React,{useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {COLORS,SIZES } from '../../../constants';
import {ForgotPasswordB,ForgotPasswordI} from '../../../components';
import { router } from 'expo-router';


const pressedSendEmail= () => {
    console.warn("SendEmail")
  
}
const pressedSignIn = () => { 
  router.push("/screens/authentication/SignInScreen")
  
 }


const ForgotPassword = () => {

const {email,setEmail}=useState("");

  return (
    <View style={styles.container}>  
      <Text style={styles.signUp}>
        Reset your Password
      </Text>
      <ForgotPasswordI 
        placeholder={"Email Address"} 
        value={email} 
        setValue={setEmail} 
       />      
      <ForgotPasswordB 
        text={"Send email"} 
        onPress={pressedSendEmail} 
        cont_style={"container_1"}
        text_style={"text_1"} />
      <ForgotPasswordB 
          text={ "Back to Sign In"} 
          onPress={pressedSignIn}
          cont_style={"container_2"}
          text_style={"text_2"}
          />
      

     
    </View>
  )
}

const styles= StyleSheet.create({
  
    container:{
        paddingTop:"40%" ,
        margin:20 

    },
    signUp:{
      fontSize:SIZES.xxLarge,
      color:COLORS.tertiary,
      fontWeight:"bold",
      margin:15,
      marginStart:0,
      
    },
    image:{
        width:"80%",
        maxWidth:350,
        height:"10%",
        padding:100,
    },
    text:{
      fontSize:SIZES.small,
      fontWeight:"bold",
      color:COLORS.secondary,
      marginVertical:10,
      

    },
    link:{
      textDecorationLine:"underline",
      color:COLORS.tertiary
    }
})

    


export default ForgotPassword