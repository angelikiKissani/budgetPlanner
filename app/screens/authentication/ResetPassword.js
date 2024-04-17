import React,{useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {COLORS,SIZES } from '../../../constants';
import {ForgotPasswordB,ForgotPasswordI} from '../../../components';



const pressedSendEmail= () => {
    console.warn("SendEmail")
  
}
const pressedSignIn =() =>{
  console.warn("SignIn")
}


const ResetPassword = () => {

const {email,setEmail}=useState("");

  return (
    <View style={styles.container}>  
      <Text style={styles.title}>
        Reset your Password
      </Text>
      <Text style={styles.text2}>Confirmation Code:</Text>
      <ForgotPasswordI 
        placeholder={"Enter you Confirmation Code"} 
        value={email} 
        setValue={setEmail} 
       />     
       <Text style={styles.text2}>New Password:</Text> 
        <ForgotPasswordI 
        placeholder={"Enter New Password"} 
        value={email} 
        setValue={setEmail} 
       />      
      <ForgotPasswordB 
        text={"Submit"} 
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
    title:{
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
    text2:{
        fontSize:SIZES.medium,
        marginBottom:8,
        color:COLORS.tertiary,
        fontWeight:'bold',
        marginTop:15,
    },
    link:{
      textDecorationLine:"underline",
      color:COLORS.tertiary
    }
})

    


export default ResetPassword