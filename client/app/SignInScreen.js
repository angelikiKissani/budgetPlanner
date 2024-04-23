import React,{useState} from 'react';
import { View,Text, Image,StyleSheet, useWindowDimensions,TextInput,secureTextEntry } from 'react-native';
import {router, Stack} from 'expo-router';
import {useForm} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios"

import { COLORS,icons,SIZES} from "../constants";
import {Button} from '../components';

//api

// import axios from 'axios';


const SignInScreen = () => {


  const {height}= useWindowDimensions()
  const {control, handleSubmit, formState:{errors}} = useForm();
  



  //routes
  const pressedSignIn= async data => {
    
    email=data.email
    password=data.password
    const resp= await axios.post("http://192.168.1.4:8001/api/signin",{email,password});
    if (resp.data.error){
      alert(resp.data.error)
    }
    else{
      alert("Sign In Successful")
    }
    
  }
  const pressedForgotPassword =() =>{
  }
  const pressedDontHaveAccount = () =>{
    router.push("index")
  }

  return (
    <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
                
            <Stack.Screen
                options={{
                    headerShadowVisible:false ,
                    headerShown:false
                }}/>
                
            <View style={styles.container}>  
              <Image    
                source={icons.logo}  
                style= {[styles.image ,{ height: height* 0.1} ]} 
                resizeMode='contain'
                />
              <Controller 
                control={control}
                name='email'
                rules={{required:"Email is required",minLength:3}}
                render={({field:{onChange,value,onBlur},fieldState:{error}})=>
                  <>
                    <View style={[styles.input_container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
                      <TextInput 
                        value={value} 
                        onChangeText={onChange} 
                        onBlur={onBlur} 
                        placeholder={"Email"}
                        placeholderTextColor={COLORS.gray2} 
                        style={styles.input} 
                        autoCompleteType="email"
                        keyboardType='email-address'
                        clearButtonMode="always"
                        secureTextEntry={secureTextEntry}/>
                    </View>
                    {error&&(
                      <Text style={{color:COLORS.warm}}>{error.message}</Text>
                      
                    )}
                </>
                }
              /> 
              

              <Controller 
                control={control}
                name='password'
                rules={{required:"Password is required",minLength:3}}
                render={({field:{value,onChange,onBlur},fieldState:{error}})=>
                  <>
                    <View style={[styles.input_container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
                      <TextInput 
                        value={value} 
                        onChangeText={onChange} 
                        onBlur={onBlur} 
                        placeholder={"Password"} 
                        placeholderTextColor={COLORS.gray2} 
                        style={styles.input} 
                        secureTextEntry={true}/>
                    </View>
                    {error&&(
                      <Text style={{color:COLORS.warm}}>{error.message}</Text>
                    )}
                </>
                }
              /> 
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
    </SafeAreaProvider>
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
        height:200,
        right:3
    },
    input_container:{
      backgroundColor: "white",
      borderBottomWidth:1,
      borderBottomColor: COLORS.secondary,
     
      width:"100%",
      shadowColor:COLORS.gray,

      paddingVertical:10,
      paddingHorizontal:5,
      marginVertical:2


  },
  input:{
      padding:8,
      color:COLORS.tertiary,
      fontSize:SIZES.xLarge

  }
    })


export default SignInScreen