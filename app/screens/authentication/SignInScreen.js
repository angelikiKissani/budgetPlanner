import React,{useState} from 'react';
import { View, Image,StyleSheet, useWindowDimensions } from 'react-native';
import {router } from 'expo-router';
import {useForm} from 'react-hook-form';

import { icons} from '../../../constants';
import {Input,Button} from '../../../components';


const SignInScreen = () => {

  const {height}= useWindowDimensions()
  const {control, handleSubmit, formState:{errors}} = useForm();

  //routes
  const pressedSignIn= data => {
    console.log(data);
    router.push("/TabNavigator");
  }
  const pressedForgotPassword =() =>{
  }
  const pressedDontHaveAccount = () =>{
    router.push("/screens/authentication/SignUpScreen")
  }

  return (
    <View style={styles.container}>  
      <Image    
        source={icons.logo}  
        style= {[styles.image ,{ height: height* 0.1} ]} 
        resizeMode='contain'
        />
      <Input 
        name='username'
        placeholder={"Username"} 
        control={control}
        rules={{required:"Username is required",minLength:3}}
        />
      <Input 
        name='password'
        placeholder={"Password"} 
        control={control}
        rules={{required:"Password is required",minLength:3}}
        secureTextEntry={true}/>

      <Button 
        text={"Forgot your password?"} 
        onPress={pressedForgotPassword}
        cont_style={"container_3"}
        text_style={"text_2"}
        />
      
     
      <Button 
        text={"Sign In"} 
        onPress={handleSubmit(pressedSignIn)} 
        cont_style={"container_1"}
        text_style={"text_1"} />
      
      <Button text={"Don't have an account? Sign Up"} 
        onPress={pressedDontHaveAccount}
        cont_style={"container_2"}
        text_style={"text_4"}
      /> 
      
    </View>
  )
}

const styles= StyleSheet.create({
  
    container:{
        alignItems:'center',
        marginTop:"70%", 
        marginHorizontal:30,
        height:"100%"

    },
    image:{
        width:"90%",
        maxWidth:350,
        height:200
    }
    })


export default SignInScreen