import React,{useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';


import { COLORS,SIZES } from '../../../constants';
import {SignUpInput,SignUpButton} from '../../../components';



const EMAIL_REGEX= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



const SignUpScreen = () => {
  const {control, handleSubmit,formState:{errors}, watch}=useForm();
  const pswrd=watch("password");

  const pressedSignUp= data => {
    console.log(data)
    //router.push("/screens/authentication/SignInScreen")
  }
  const pressedTermsOfUse =() =>{
    console.warn("TermsOfUse")
  }
  const pressedPrivacyPolicy =() =>{
    console.warn("PrivacyPolicy")
  }
  const pressedSignIn = () => { 
    router.push("/screens/authentication/SignInScreen")
  
  }



  return (
    <View style={styles.container}>  
      <Text style={styles.signUp}>
        Create Account
      </Text>
      <SignUpInput 
        name="username"
        placeholder={"Username"} 
        rules={{
          required:"Username is required",
          minLength:{
            value:3,
            message:"Username should be at least 3 characters long"},
          maxLength:{
            value:15,
            message:"Username should be max 15 characters long"
          }
        }}
        control={control}
        />
      <SignUpInput 
        name="email"
        rules={{
          required:"Email Address is required",
          pattern:{
            value:EMAIL_REGEX,
            message:"Invalid Email"
          }
        }}
        control={control}
        placeholder={"Email Address"} 
       />
      <SignUpInput 
        name="password"
        control={control}
        placeholder={"Password"} 
        rules={{
          required:"Password is required",
          minLength:{
            value:8,
            message:"Password should be at least 8 characters long"},
          maxLength:{
            value:20,
            message:"Password should be max 20 characters long"
          }
          }
        }
        secureTextEntry={true}
      />
      <SignUpInput 
        name="repeatPassword"
        control={control}
        rules={{validate: value => value== pswrd || "Passwords do not match"}}
        placeholder={"Repeat Password"} 
        secureTextEntry={true}
      />
      <Text style={styles.text}>
        By registering, you agree to the <Text style={styles.link} onPress={pressedTermsOfUse}>Terms of Use</Text> and <Text style={styles.link} onPress={pressedPrivacyPolicy}>Privacy Policy</Text> 
      </Text>
      <SignUpButton 
        text={"Sign Up"} 
        onPress={handleSubmit(pressedSignUp)} 
        cont_style={"container_1"}
        text_style={"text_1"} />
      <SignUpButton 
        text={"Already have an account? Sign In"} 
        onPress={pressedSignIn}
        cont_style={"container_2"}
        text_style={"text_4"}
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
      margin:10,
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
      marginVertical:10

    },
    link:{
      textDecorationLine:"underline",
      color:COLORS.tertiary
    }
})

    


export default SignUpScreen